# Project Code Analysis

## CoinLogo Component

- Refactored to use Next.js `<Image />` for optimized remote image loading.
- Accepts a `url` prop for the coin image source.
- Uses a rounded container and `object-cover` for consistent display.
- Supports remote images from `lh3.googleusercontent.com` via Next.js config.
- Example usage:
  ```tsx
  <CoinLogo url="https://lh3.googleusercontent.com/..." />
  ```

## Next.js Image Configuration

- Updated `next.config.ts` to use `images.remotePatterns` for Googleusercontent images.
- Ensures compatibility with Next.js 13+ image optimization.

## LandingSection Component

- Background image now uses `<Image />` instead of CSS `backgroundImage` style.
- Enables Next.js image optimization and remotePatterns support.

## Contact Page & Form Improvements

### October 2025

#### UI & Design

- Contact info section redesigned with icons, cards, and clear hierarchy (Email, Phone, Live Chat, etc.)
- Added intro text, business hours, and social media links
- Improved dark theme styling and spacing

#### Form Functionality

- Refactored to use TanStack Form (`@tanstack/react-form`) for robust state management
- Zod validation for all fields (name, email, message) with real-time error feedback
- Error messages shown only after field is touched
- Visual error feedback: red borders and error text below fields
- Success/error status messages after submission

#### reCAPTCHA Integration

- Integrated Google reCAPTCHA v3 (invisible badge)
- Badge hidden via CSS (`.grecaptcha-badge { visibility: hidden !important; }`)
- Required disclosure text added below form
- Server-side token verification and score threshold (rejects bots)

#### Server Logic

- Server action validates form data and reCAPTCHA token
- Logs submissions and simulates processing delay
- Ready for integration with email, database, or CRM

### Real vs Mocked Functionality (Contact Page)

**Real (Production-Ready):**

- Form validation (Zod schema, TanStack Form)
- Error and success message handling
- Google reCAPTCHA v3 integration (client-side token generation, server-side verification)
- Required disclosure text for reCAPTCHA
- All UI/UX improvements (icons, cards, social links, dark theme)

**Mocked / Placeholder:**

- Business logic after reCAPTCHA verification (currently only logs submission and simulates delay)
  - No actual email sending, database storage, or CRM integration yet
- Live Chat section is UI only (no real chat functionality)
- Office location is static text (no map or directions)

**How to Make It Fully Real:**

- Implement email sending (e.g., Resend, SendGrid, Nodemailer)
- Connect to a database or CRM for storing submissions
- Integrate a real live chat provider (e.g., Intercom, Zendesk)
- Add map/directions for office location

---


