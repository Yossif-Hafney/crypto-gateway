"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ContactInput, ContactTextarea } from "./ContactInput";
import { handleContactFormSubmit } from "./contactFormLogic";
import { RecaptchaDisclosure } from "@outerComponents/RecaptchaDisclosure";

export function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      await handleContactFormSubmit({
        value,
        executeRecaptcha,
        setSubmitStatus,
        setIsSending,
        form,
      });
      // Socket emit is handled inside handleContactFormSubmit with DB ID
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      {/* Name Field */}
      <form.Field
        name="name"
        validators={{
          onChange: z.string().min(2, "Name must be at least 2 characters"),
          onBlur: z.string().min(2, "Name must be at least 2 characters"),
        }}
      >
        {(field) => (
          <ContactInput
            label="Full Name"
            name="name"
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
            placeholder="Your Name"
            autoComplete="name"
            disabled={isSending}
            error={
              field.state.meta.errors.length > 0 && field.state.meta.isTouched
                ? field.state.meta.errors[0]?.message
                : undefined
            }
          />
        )}
      </form.Field>

      {/* Email Field */}
      <form.Field
        name="email"
        validators={{
          onChange: z.string().email("Please enter a valid email address"),
          onBlur: z.string().email("Please enter a valid email address"),
        }}
      >
        {(field) => (
          <ContactInput
            label="Email Address"
            name="email"
            type="email"
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
            placeholder="company@email.com"
            autoComplete="email"
            disabled={isSending}
            error={
              field.state.meta.errors.length > 0 && field.state.meta.isTouched
                ? field.state.meta.errors[0]?.message
                : undefined
            }
          />
        )}
      </form.Field>

      {/* Message Field */}
      <form.Field
        name="message"
        validators={{
          onChange: z
            .string()
            .min(10, "Message must be at least 10 characters"),
          onBlur: z.string().min(10, "Message must be at least 10 characters"),
        }}
      >
        {(field) => (
          <ContactTextarea
            label="Message"
            name="message"
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
            placeholder="Tell us how we can help you..."
            autoComplete="off"
            disabled={isSending}
            error={
              field.state.meta.errors.length > 0 && field.state.meta.isTouched
                ? field.state.meta.errors[0]?.message
                : undefined
            }
          />
        )}
      </form.Field>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSending}
        className="w-full rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      {/* reCAPTCHA v3 Disclosure */}
      <RecaptchaDisclosure />
    </form>
  );
}
