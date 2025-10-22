"use server";

import { z } from "zod";

// Validation schema for server-side
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  token: z.string().min(1, "Security token is required"),
});

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  token: string;
};

export async function contactAction(formData: FormData) {
  try {
    // Extract and validate form data
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      token: formData.get("token"),
    };

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      return {
        ok: false,
        error: "Invalid form data. Please check your input and try again.",
      };
    }

    const { token } = parsed.data;

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

    return { ok: true };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
