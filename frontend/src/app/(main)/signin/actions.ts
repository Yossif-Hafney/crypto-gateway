"use server";

import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(254, "Email is too long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password is too long")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?\":{}|<>]/,
      "Password must contain at least one special character"
    ),
  token: z.string().min(1, "Security token is required"),
});

export type SigninFormData = {
  email: string;
  password: string;
  token: string;
};

export async function signinAction(formData: FormData) {
  try {
    const values = {
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? "",
      token: formData.get("token") ?? "",
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      return {
        ok: false,
        error: "Invalid form data. Please check your input.",
      };
    }

    const { token } = parsed.data;

    // Verify reCAPTCHA server-side
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing RECAPTCHA_SECRET_KEY");
      return {
        ok: false,
        error: "Server configuration error. Please contact support.",
      };
    }

    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const verifyBody = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    });

    const res = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody.toString(),
    });

    if (!res.ok) {
      console.error("reCAPTCHA verification request failed");
      return {
        ok: false,
        error: "Security verification failed. Please try again.",
      };
    }

    const data = await res.json();
    if (!data.success || (data.score && data.score < 0.5)) {
      console.warn("reCAPTCHA verification failed or low score", {
        success: data.success,
        score: data.score,
      });
      return {
        ok: false,
        error: "Security verification failed. Please try again.",
      };
    }

    // ✅ Return validated values to client
    return {
      ok: true,
      data: {
        email: parsed.data.email,
        password: parsed.data.password,
        token: parsed.data.token,
      },
    };
  } catch (error) {
    console.error("Signin action error:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

// New server action that handles the full login flow and sets cookie server-side
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import userDb from "@/lib/userDb";
import { signJwt } from "@/lib/jwt";
import { checkRateLimit, resetRateLimit } from "@/lib/rateLimit";

export async function signinActionWithAuth(formData: FormData) {
  try {
    const values = {
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? "",
      token: formData.get("token") ?? "",
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      return {
        ok: false,
        error: "Invalid form data. Please check your input.",
      };
    }

    const { email, password, token } = parsed.data;

    // Verify reCAPTCHA server-side
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing RECAPTCHA_SECRET_KEY");
      return {
        ok: false,
        error: "Server configuration error. Please contact support.",
      };
    }

    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const verifyBody = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    });

    const res = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody.toString(),
    });

    if (!res.ok) {
      console.error("reCAPTCHA verification request failed");
      return {
        ok: false,
        error: "Security verification failed. Please try again.",
      };
    }

    const data = await res.json();
    if (!data.success || (data.score && data.score < 0.5)) {
      console.warn("reCAPTCHA verification failed or low score", {
        success: data.success,
        score: data.score,
      });
      return {
        ok: false,
        error: "Security verification failed. Please try again.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return {
        ok: false,
        error: "Invalid email address.",
      };
    }

    // Rate limiting
    const rateLimitKey = `signin:server:${email}`;
    const rateLimit = checkRateLimit(rateLimitKey, {
      maxAttempts: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimit.success) {
      const resetTimeMinutes = Math.ceil(
        (rateLimit.resetTime - Date.now()) / 60000
      );
      return {
        ok: false,
        error: `Too many login attempts. Try again in ${resetTimeMinutes} minutes.`,
      };
    }

    // Find user
    type User = { id: number; email: string; password: string };
    const user = userDb
      .prepare("SELECT id, email, password FROM users WHERE email = ?")
      .get(email.toLowerCase().trim()) as User | undefined;

    // Always compare password even if user not found (timing attack mitigation)
    const dummyHash = "$2a$12$dummyHashToPreventTimingAttacks1234567890123456";
    const passwordToCompare = user?.password || dummyHash;
    const isMatch = await bcrypt.compare(password, passwordToCompare);

    if (!user || !isMatch) {
      return {
        ok: false,
        error: "Invalid email or password.",
      };
    }

    // Reset rate limit after success
    resetRateLimit(rateLimitKey);

    // Generate JWT
    const jwtToken = signJwt({ id: user.id, email: user.email });

    // Set cookie server-side
    const cookieStore = await cookies();
    cookieStore.set({
      name: "token",
      value: jwtToken,
      httpOnly: true,
      secure: false, // HTTP in development
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    console.log("✅ ========================================");
    console.log("✅ LOGIN SUCCESSFUL!");
    console.log("✅ ========================================");
    console.log("✅ User:", user.email);
    console.log("✅ User ID:", user.id);
    console.log("✅ Cookie set successfully");
    console.log("✅ Redirecting to dashboard...");
    console.log("✅ ========================================");

    // Redirect to dashboard (this throws NEXT_REDIRECT which is expected)
    // Note: The "NEXT_REDIRECT" error you see after this is NORMAL - it's how Next.js performs redirects!
    redirect("/dashboard");
  } catch (error) {
    // Don't catch NEXT_REDIRECT - let it propagate for redirect to work
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      console.log("✅ Redirect initiated successfully");
      throw error;
    }

    // Log detailed error information
    console.error("❌ ========================================");
    console.error("❌ SIGNIN ERROR OCCURRED");
    console.error("❌ ========================================");
    console.error("❌ Error:", error);
    console.error(
      "❌ Error type:",
      error instanceof Error ? error.constructor.name : typeof error
    );
    console.error(
      "❌ Error message:",
      error instanceof Error ? error.message : String(error)
    );
    if (error instanceof Error && error.stack) {
      console.error("❌ Stack trace:", error.stack);
    }
    console.error("❌ ========================================");

    return {
      ok: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
