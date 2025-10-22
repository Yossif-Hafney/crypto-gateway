# Login & Logout Process - Complete Guide

## Why You See "NEXT_REDIRECT" Error

**THIS IS NOT AN ERROR!** This is how Next.js implements server-side redirects in Server Actions.

When you call `redirect("/dashboard")` in a Server Action, Next.js:

1. Throws a special error with message "NEXT_REDIRECT"
2. Next.js framework catches this error internally
3. Performs the actual redirect to the specified URL

**You can safely ignore this message in your terminal** - it's expected behavior and means your login is working correctly!

---

## Complete Login Process (Step-by-Step)

### **Step 1: User Fills Sign-In Form**

- User visits `/signin`
- Enters email and password
- Clicks "Sign In" button

### **Step 2: Client-Side Processing**

- reCAPTCHA v3 generates a security token
- Form creates FormData with: email, password, token
- Form calls `signinActionWithAuth` Server Action

### **Step 3: Server-Side Validation**

The `signinActionWithAuth` server action runs on the server:

1. **Input Validation** (Zod schema)

   - Email: valid format, max 254 chars
   - Password: 8-128 chars, must have number + special char
   - Token: reCAPTCHA token present

2. **reCAPTCHA Verification**

   - Sends token to Google's API
   - Verifies it's a real human (score > 0.5)

3. **Email Format Check**

   - Validates email with regex
   - Normalizes (lowercase, trim)

4. **Rate Limiting**

   - Checks if user has exceeded 5 login attempts in 15 minutes
   - If exceeded: returns error with retry time

5. **User Lookup**

   - Queries database for user by email
   - Retrieves: id, email, password hash

6. **Password Verification**

   - Uses bcrypt to compare entered password with stored hash
   - **Timing attack prevention**: Always compares even if user not found
   - Uses dummy hash if user doesn't exist (prevents timing attacks)

7. **Rate Limit Reset**

   - If login successful, resets rate limit counter

8. **JWT Token Generation**

   - Creates JWT with payload: `{ id, email, jti (unique ID), iat, exp }`
   - Signs with JWT_SECRET
   - Sets issuer: "crypto-gateway"
   - Sets audience: "crypto-gateway-users"
   - Expiry: 7 days

9. **Cookie Setting**

   - Sets httpOnly cookie named "token"
   - Flags:
     - `httpOnly: true` → JavaScript can't access (prevents XSS)
     - `secure: false` → For HTTP in development (use true in production)
     - `sameSite: "lax"` → CSRF protection
     - `path: "/"` → Available on all routes
     - `maxAge: 7 days` → Cookie expires in 7 days

10. **Redirect**
    - Calls `redirect("/dashboard")`
    - **Throws NEXT_REDIRECT error** (expected!)
    - Next.js catches and performs redirect

### **Step 4: Dashboard Page Load**

1. Browser navigates to `/dashboard`
2. Dashboard layout server component runs
3. Calls `isAuthenticated()` function
4. `isAuthenticated()` calls `getCurrentUser()`:

   - Reads "token" cookie from request
   - Calls `verifyJwt(token)`:
     - Verifies JWT signature
     - Checks expiry
     - Validates issuer and audience
   - Returns user payload if valid, null if invalid

5. **If authenticated:**

   - Dashboard renders with user data
   - Sidebar shows user info
   - User can access protected features

6. **If not authenticated:**
   - Redirects to `/signin`
   - User must log in again

---

## Complete Logout Process (Step-by-Step)

### **Step 1: User Clicks Logout**

- User clicks "Logout" button in sidebar
- Sidebar calls `logoutAction` Server Action

### **Step 2: Server-Side Logout**

The `logoutAction` server action runs:

1. **Optional API Call**

   - Calls `/api/auth/logout` endpoint
   - This endpoint also deletes cookie (for consistency)

2. **Delete Cookie Server-Side**

   - Uses `cookies().delete("token")`
   - Sets cookie value to empty string
   - Sets maxAge to 0 (expires immediately)

3. **Redirect to Sign-In**
   - Calls `redirect("/signin")`
   - **Throws NEXT_REDIRECT** (expected!)
   - Next.js performs redirect

### **Step 3: Sign-In Page Load**

- Browser navigates to `/signin`
- User is logged out
- Cookie is deleted
- User can log in again

---

## Security Features

### **✅ Input Validation**

- Zod schema validates all inputs
- Email format regex
- Password complexity requirements

### **✅ reCAPTCHA v3**

- Prevents bot attacks
- Requires score > 0.5

### **✅ Rate Limiting**

- Max 5 attempts per 15 minutes per email
- Prevents brute force attacks

### **✅ Timing Attack Prevention**

- Always compares password even if user not found
- Uses dummy hash for non-existent users
- Prevents user enumeration

### **✅ HttpOnly Cookies**

- JWT stored in httpOnly cookie
- JavaScript cannot access
- Prevents XSS attacks

### **✅ CSRF Protection**

- SameSite: "lax" cookie flag
- Origin validation in API routes

### **✅ JWT Security**

- Signed with secret key
- Issuer and audience validation
- 7-day expiry
- Unique token ID (jti) for revocation

### **✅ HTTPS in Production**

- Secure flag enabled for HTTPS
- SameSite: "strict" in production

---

## Common Issues & Solutions

### **Issue: "No token found in cookies"**

**Cause:** Cookie not set or not sent
**Solution:**

- Clear browser cookies
- Ensure you're using the same origin (localhost or IP)
- Check cookie flags (secure, sameSite)

### **Issue: "JWT invalid: audience invalid"**

**Cause:** Old token without audience field
**Solution:**

- Log out and log in again
- Clear cookies
- New token will have correct audience

### **Issue: "Briefly shows dashboard then redirects to signin"**

**Cause:** Cookie set client-side not sent back to server
**Solution:**

- Use server action (signinActionWithAuth) instead of client fetch
- Server-side cookie setting is more reliable

### **Issue: "CORS error when logging in from 192.168.1.2:3000"**

**Cause:** 192.168.1.2:3000 not in allowed origins
**Solution:**

- Add to CORS allowed origins in API routes
- Ensure NEXT_PUBLIC_SUB_API_URL is set correctly

---

## File Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── signin/
│   │   │   │   ├── actions.ts          ← Server actions (signin logic)
│   │   │   │   ├── page.tsx            ← Sign-in page
│   │   │   │   └── Components/
│   │   │   │       └── signinForm.tsx  ← Sign-in form component
│   │   │   ├── logout/
│   │   │   │   └── actions.ts          ← Logout server action
│   │   │   └── api/
│   │   │       └── auth/
│   │   │           ├── signin/
│   │   │           │   └── route.ts    ← Sign-in API route (optional)
│   │   │           └── logout/
│   │   │               └── route.ts    ← Logout API route
│   │   └── (dashboard)/
│   │       └── dashboard/
│   │           ├── layout.tsx          ← Auth check here
│   │           └── Components/
│   │               └── SideBar.tsx     ← Logout button
│   └── lib/
│       ├── auth.ts                     ← getCurrentUser, isAuthenticated
│       ├── jwt.ts                      ← signJwt, verifyJwt
│       └── rateLimit.ts                ← checkRateLimit, resetRateLimit
```

---

## Best Practices

1. **Always use HTTPS in production**
2. **Set secure: true for cookies in production**
3. **Use SameSite: "strict" in production**
4. **Rotate JWT_SECRET regularly**
5. **Monitor failed login attempts**
6. **Log security events (but never passwords!)**
7. **Use environment variables for secrets**
8. **Keep JWT expiry reasonable (7 days max)**
9. **Implement token refresh for long sessions**
10. **Add 2FA for extra security**

---

## Summary

Your login system is now secure and follows industry best practices:

✅ **Secure authentication** with JWT and httpOnly cookies
✅ **Protection against** XSS, CSRF, brute force, timing attacks
✅ **Server-side rendering** ensures cookies work reliably
✅ **Rate limiting** prevents abuse
✅ **reCAPTCHA** prevents bots

The "NEXT_REDIRECT" message you see is **normal** and indicates the redirect is working correctly!
