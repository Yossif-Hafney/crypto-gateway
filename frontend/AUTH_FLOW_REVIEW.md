# Authentication Flow Review

## 📋 Complete Authentication Process

### **Sign Up Flow**

1. **Frontend (SignUpForm)**

   - User fills form: email, username, password, confirm password, terms
   - TanStack Form validates:
     - Email format
     - Username (min 3 chars)
     - Password (min 8 chars, 1 number, 1 special char)
     - Passwords match
     - Terms accepted
   - reCAPTCHA v3 token generated

2. **Server Action (signupAction)**

   - Validates form data with Zod schema
   - Verifies reCAPTCHA token with Google
   - Checks reCAPTCHA score (must be > 0.5)
   - ✅ **FIXED**: Calls `/api/auth/signup` with email, password, username

3. **API Route (/api/auth/signup)**
   - Validates email and password
   - Hashes password with bcrypt (salt rounds: 10)
   - Inserts user into SQLite database
   - Returns success or error (e.g., email already registered)

### **Sign In Flow**

1. **Frontend (SignInForm)**

   - User enters email and password
   - TanStack Form validates:
     - Email format
     - Password (min 8 chars, 1 number, 1 special char)
   - reCAPTCHA v3 token generated

2. **Server Action (signinAction)**

   - Validates form data with Zod schema
   - Verifies reCAPTCHA token with Google
   - Checks reCAPTCHA score (must be > 0.5)
   - ✅ **FIXED**: Calls `/api/auth/signin` with email and password

3. **API Route (/api/auth/signin)**
   - Looks up user by email in database
   - Compares password with stored hash using bcrypt
   - If valid:
     - Generates JWT token (7-day expiry)
     - Sets secure HTTP-only cookie
     - Returns user info (id, email)

## 🔐 Security Features

### ✅ **Implemented**

- **Password Hashing**: bcrypt with 10 salt rounds
- **JWT Tokens**: Secure, HTTP-only cookies with 7-day expiry
- **reCAPTCHA v3**: Bot protection with score threshold (0.5)
- **Input Validation**: Client and server-side Zod validation
- **HTTPS Enforcement**: Secure cookies only in production
- **SQL Injection Protection**: Prepared statements with better-sqlite3
- **Unique Email Constraint**: Database-level uniqueness

### ⚠️ **Security Recommendations**

1. **JWT Secret**

   - Current: `process.env.JWT_SECRET || "dev_secret_key"`
   - ⚠️ Set strong JWT_SECRET in production
   - Use at least 32 random characters

2. **Rate Limiting**

   - ❌ Not implemented
   - Add rate limiting to prevent brute force attacks
   - Recommended: 5 attempts per 15 minutes per IP

3. **Password Requirements**

   - ✅ Min 8 chars, 1 number, 1 special char
   - Consider adding: uppercase requirement, max length

4. **Session Management**

   - ✅ JWT stored in HTTP-only cookie
   - Consider: Refresh tokens for longer sessions

5. **CORS Configuration**

   - Currently using allowedDevOrigins for dev
   - Ensure proper CORS headers in production

6. **Environment Variables**
   - Required: JWT_SECRET, RECAPTCHA_SECRET_KEY, NEXT_PUBLIC_RECAPTCHA_KEY
   - Ensure all are set in production

## 🗄️ Database Schema

```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔑 JWT Payload

```typescript
{
  id: number,
  email: string,
  exp: number  // 7 days from issue
}
```

## 📝 Next Steps

1. **Add User Context/Session Management**

   - Create React Context for authenticated user
   - Check JWT validity on protected routes
   - Implement logout functionality

2. **Protected Routes**

   - Add middleware to verify JWT on protected pages
   - Redirect unauthenticated users to sign-in

3. **Email Verification** (Optional)

   - Send verification email on sign-up
   - Verify email before allowing sign-in

4. **Password Reset** (Recommended)

   - "Forgot Password" flow with email token
   - Secure password reset endpoint

5. **Two-Factor Authentication** (Optional)
   - Add TOTP or SMS-based 2FA
   - Enhance security for sensitive operations

## ✅ Fixed Issues

1. ✅ **Sign-in action now calls `/api/auth/signin`**
2. ✅ **Sign-up action now calls `/api/auth/signup`**
3. ✅ **Passwords are properly sent to API for encryption/verification**
4. ✅ **Validation works on both client and server**
5. ✅ **reCAPTCHA protection integrated**

## 🚀 Status

**Authentication is now fully functional!**

- Users can sign up with encrypted passwords
- Users can sign in and receive JWT tokens
- Sessions are managed via secure cookies
- Bot protection via reCAPTCHA v3
