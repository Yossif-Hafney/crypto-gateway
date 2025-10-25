"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { handleSignInFormSubmit } from "./signinFormLogic";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import LoadingSpinner from "@/Components/LoadingSpinner";
import { RecaptchaDisclosure } from "@outerComponents/RecaptchaDisclosure";

export default function SignInForm() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await handleSignInFormSubmit({
        value,
        executeRecaptcha,
        setStatus,
        setLoading,
      });
    },
  });

  return (
    <main className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8 bg-background-dark">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-background-dark rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
          <form
            className="space-y-6 mt-8"
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
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="email"
                      className={`bg-white/5 text-white border-none rounded-lg px-4 py-3 w-full transition-all duration-200 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                        field.state.meta.errors.length > 0 &&
                        field.state.meta.isTouched
                          ? "border-red-500"
                          : ""
                      }`}
                      id="email"
                      name="email"
                      placeholder="crypto@example.com"
                      required
                      type="text"
                      value={field.state.value ?? ""}
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
                  <label
                    className="block text-sm font-medium text-white/80"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="current-password"
                      className={`bg-white/5 text-white border-none rounded-lg px-4 py-3 w-full transition-all duration-200 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                        field.state.meta.errors.length > 0 &&
                        field.state.meta.isTouched
                          ? "border-red-500"
                          : ""
                      }`}
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      type="password"
                      value={field.state.value ?? ""}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                    />
                    {field.state.meta.errors.length > 0 &&
                      field.state.value && (
                        <ul className="text-sm text-red-400 mt-1 space-y-1">
                          {field.state.meta.errors.map((err, idx) => (
                            <li key={idx}>
                              {err?.message ?? "Invalid password"}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                </div>
              )}
            </form.Field>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-white/30 text-primary focus:ring-primary bg-transparent"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label
                  className="ml-2 block text-sm text-white/80"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  className="font-medium text-primary hover:text-primary/80"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
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
                className="flex w-full justify-center items-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading && <LoadingSpinner />}
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-sm text-white/60">
          Don&#39;t have an account?
          <Link
            className="font-medium text-primary hover:text-primary/80"
            href="/signup"
          >
            {" "}
            Sign up
          </Link>
        </p>
        <RecaptchaDisclosure />
      </div>
    </main>
  );
}
