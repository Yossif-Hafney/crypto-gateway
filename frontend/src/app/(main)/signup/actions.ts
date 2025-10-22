"use server";

import { z } from "zod";
// Validation schema for server-side
const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  token: z.string().min(1, "Security token is required"),
});

export type SignupFormData = {
  username: string;
  email: string;
  password: string;
  token: string;
};

export async function signupAction(formData: FormData) {
  try {
    // Extract and validate form data
    const values = {
      username: formData.get("username") ?? "",
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? "",
      token: formData.get("token") ?? "",
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      return {
        ok: false,
        error: "Invalid form data. Please check your input and try again.",
      };
    }

    const { username, email, password, token } = parsed.data;
    // Verify reCAPTCHA token with Google
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY is not configured");
      return {
        ok: false,
        error: "Server configuration error. Please contact support.",
      };
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
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
      console.error("reCAPTCHA verification request failed:", res.status);
      return {
        ok: false,
        error: "Security verification failed. Please try again.",
      };
    }

    const data = await res.json();

    // Check reCAPTCHA v3 score (0.0 - 1.0, lower = more likely bot)
    if (!data.success || (data.score && data.score < 0.5)) {
      console.warn("reCAPTCHA verification failed or low score:", data);
      return {
        ok: false,
        error:
          "Security verification failed. Please try again or contact support.",
      };
    }

    console.log("📩 New User form submission:", {
      username,
      email,
      timestamp: new Date().toISOString(),
      score: data.score,
    });

    // Call the signup API route
    const apiResponse = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name: username }),
      }
    );

    const apiResult = await apiResponse.json();

    if (!apiResponse.ok) {
      return {
        ok: false,
        error: apiResult.error || "Sign up failed.",
      };
    }

    return { ok: true, data: apiResult };
  } catch (error) {
    console.error("Error processing Signup Process:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
