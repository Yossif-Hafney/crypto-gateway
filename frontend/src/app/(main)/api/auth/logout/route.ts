import { NextResponse, NextRequest } from "next/server";

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

    // Create response
    const res = new NextResponse(
      JSON.stringify({ ok: true, message: "Logged out successfully" }),
      { status: 200, headers: corsHeaders }
    );

    // Delete the token cookie securely
    res.cookies.set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      path: "/",
      maxAge: 0, // Expire immediately
    });

    return res;
  } catch (error) {
    console.error("Logout Error:", error);
    const origin = req.headers.get("origin");
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500, headers: getCorsHeaders(origin) }
    );
  }
}
