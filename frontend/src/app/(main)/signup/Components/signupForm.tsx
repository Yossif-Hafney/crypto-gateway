"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { handleSignUpFormSubmit } from "./signupFormLogic";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import LoadingSpinner from "@/Components/LoadingSpinner";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    onSubmit: async ({ value }) => {
      await handleSignUpFormSubmit({
        value,
        executeRecaptcha,
        setStatus,
        setLoading,
        form,
      });
    },
  });

  return (
    <main className="flex-grow flex items-center justify-center py-8 px-4 bg-background-dark">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-background-dark rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Start your crypto journey with us.
            </p>
          </div>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <form.Field
              name="email"
              validators={{
                onChange: z
                  .string()
                  .email("Please enter a valid email address"),
                onBlur: z.string().email("Please enter a valid email address"),
              }}
            >
              {(field) => (
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    autoComplete="email"
                    className="w-full h-12 px-4 rounded-lg bg-white/5 text-white placeholder-white/40 border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors.length > 0 &&
                    field.state.meta.isTouched && (
                      <p className="text-sm text-red-400 mt-1">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="username"
              validators={{
                onChange: z
                  .string()
                  .min(3, "Username must be at least 3 characters"),
                onBlur: z
                  .string()
                  .min(3, "Username must be at least 3 characters"),
              }}
            >
              {(field) => (
                <div>
                  <label className="sr-only" htmlFor="username">
                    Username
                  </label>
                  <input
                    autoComplete="username"
                    className="w-full h-12 px-4 rounded-lg bg-white/5 text-white placeholder-white/40 border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors.length > 0 &&
                    field.state.meta.isTouched && (
                      <p className="text-sm text-red-400 mt-1">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="password"
              validators={{
                onChange: z
                  .string()
                  .min(8, "Password must be at least 8 characters")
                  .regex(/[0-9]/, "Password must contain at least one number")
                  .regex(
                    /[!@#$%^&*(),.?":{}|<>]/,
                    "Password must contain at least one special character"
                  ),
              }}
            >
              {(field) => (
                <div>
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    autoComplete="new-password"
                    className="w-full h-12 px-4 rounded-lg bg-white/5 text-white placeholder-white/40 border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors.length > 0 && field.state.value && (
                    <ul className="text-sm text-red-400 mt-1 space-y-1">
                      {field.state.meta.errors.map((err, idx) => (
                        <li key={idx}>{err?.message ?? "Invalid password"}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field
              name="confirmPassword"
              validators={{
                onChange: z
                  .string()
                  .min(8, "Password must be at least 8 characters")
                  .regex(/[0-9]/, "Password must contain at least one number")
                  .regex(
                    /[!@#$%^&*(),.?":{}|<>]/,
                    "Password must contain at least one special character"
                  ),
              }}
            >
              {(field) => (
                <div>
                  <label className="sr-only" htmlFor="confirm-password">
                    Confirm password
                  </label>
                  <input
                    autoComplete="new-password"
                    className="w-full h-12 px-4 rounded-lg bg-white/5 text-white placeholder-white/40 border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm password"
                    required
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors.length > 0 && field.state.value && (
                    <ul className="text-sm text-red-400 mt-1 space-y-1">
                      {field.state.meta.errors.map((err, idx) => (
                        <li key={idx}>{err?.message ?? "Invalid password"}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="terms">
              {(field) => (
                <div className="flex items-center">
                  <input
                    className="h-5 w-5 rounded border-2 border-white/20 bg-transparent text-primary focus:ring-primary checked:bg-primary checked:border-primary"
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={field.state.value}
                    onChange={(e) => field.handleChange(e.target.checked)}
                  />
                  <label
                    className="ml-3 block text-sm text-white/80"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <Link
                      className="font-medium text-primary hover:underline"
                      href="/terms"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="font-medium text-primary hover:underline"
                      href="/privacypolicy"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              )}
            </form.Field>
            {status.type && (
              <div
                className={`p-3 rounded-lg text-center text-sm font-medium ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-600"
                    : "bg-red-500/10 text-red-600"
                }`}
              >
                {status.message}
              </div>
            )}
            <div>
              <button
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-dark disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading && <LoadingSpinner />}
                {loading ? "Creating..." : "Create account"}
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-sm text-white/60">
          Already have an account?
          <Link
            className="font-medium text-primary hover:underline"
            href="/signin"
          >
            {" "}
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
