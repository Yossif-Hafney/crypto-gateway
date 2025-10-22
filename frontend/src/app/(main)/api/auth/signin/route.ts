import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import userDb from "@/lib/userDb";
import { signJwt } from "@/lib/jwt";
import { checkRateLimit, resetRateLimit } from "@/lib/rateLimit";

// CORS config - only allow your frontend origin
const allowedOrigins = [
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NEXT_PUBLIC_SUB_API_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://192.168.1.2:3000",
].filter(Boolean);

function getCorsHeaders(origin: string | null): HeadersInit {
  // In development, allow same-origin or if origin matches allowed list
  const isAllowed =
    !origin || // Same-origin request (no origin header)
    allowedOrigins.some((allowed) => origin === allowed);

  return {
    "Access-Control-Allow-Origin":
      isAllowed && origin
        ? origin
        : allowedOrigins[0] || "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...getCorsHeaders(origin),
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    const corsHeaders = getCorsHeaders(origin);

    // CSRF protection: verify origin (only check if origin header is present)
    if (origin && !allowedOrigins.some((allowed) => origin === allowed)) {
      return new NextResponse(
        JSON.stringify({ error: "Forbidden: Invalid origin" }),
        {
          status: 403,
          headers: corsHeaders,
        }
      );
    }

    const { email, password } = await req.json();

    // 🧩 Validate and sanitize input
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Email and password are required." }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      typeof email !== "string" ||
      !emailRegex.test(email) ||
      email.length > 254
    ) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Password length check (security best practice)
    if (
      typeof password !== "string" ||
      password.length < 8 ||
      password.length > 128
    ) {
      return new NextResponse(
        JSON.stringify({
          error: "Password must be between 8 and 128 characters.",
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // 🌐 Get IP for rate limit tracking
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";
    const rateLimitKey = `signin:${ip}:${email}`;

    // 🕒 Rate limit check
    const rateLimit = checkRateLimit(rateLimitKey, {
      maxAttempts: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.success) {
      const resetTimeMinutes = Math.ceil(
        (rateLimit.resetTime - Date.now()) / 60000
      );
      return new NextResponse(
        JSON.stringify({
          error: `Too many login attempts. Try again in ${resetTimeMinutes} minutes.`,
        }),
        { status: 429, headers: corsHeaders }
      );
    }

    // 🧠 Find user - use parameterized query (already safe from SQL injection)
    type User = { id: number; email: string; password: string };
    const result = await userDb.query(
      "SELECT id, email, password FROM users WHERE email = $1",
      [email.toLowerCase().trim()]
    );
    const user = result.rows[0] as User | undefined;

    // Always compare password even if user not found (timing attack mitigation)
    const dummyHash = "$2a$12$dummyHashToPreventTimingAttacks1234567890123456";
    const passwordToCompare = user?.password || dummyHash;
    const isMatch = await bcrypt.compare(password, passwordToCompare);

    // Return same error message whether user exists or password is wrong
    if (!user || !isMatch) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid email or password." }),
        { status: 401, headers: corsHeaders }
      );
    }

    // ✅ Reset rate limit after success
    resetRateLimit(rateLimitKey);

    // 🪪 Generate signed JWT
    const token = signJwt({ id: user.id, email: user.email });

    // 🍪 Create a proper JSON response
    const response = new NextResponse(
      JSON.stringify({
        message: "Login successful",
        user: { id: user.id, email: user.email },
      }),
      { status: 200, headers: corsHeaders }
    );

    // Set secure, httpOnly cookie with proper flags
    // Note: No explicit domain set - will default to the request's host
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: false, // Always false in development for HTTP
      sameSite: "lax", // Lax for development to work with redirects
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Do not log password or any sensitive info
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Login successful - Cookie set", {
        env: process.env.NODE_ENV,
        userId: user.id,
        email: user.email,
        tokenLength: token.length,
        cookieName: "token",
      });
    }

    return response;
  } catch (error) {
    console.error("Signin Error:", error);
    const origin = req.headers.get("origin");
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: getCorsHeaders(origin) }
    );
  }
}
