import Link from "next/link";
import { ShieldCheck } from "lucide-react";

/**
 * RecaptchaDisclosure Component
 *
 * A subtle, marginalized disclosure for reCAPTCHA v3 compliance.
 * Designed to be unobtrusive while meeting Google's policy requirements.
 */
export function RecaptchaDisclosure() {
  return (
    <div className="mt-4 mb-2" role="note" aria-label="reCAPTCHA disclosure">
      <div className="flex items-start gap-2 px-3 py-2 text-xs text-gray-500 dark:text-gray-500">
        <ShieldCheck
          className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400 dark:text-gray-600"
          strokeWidth={2}
          aria-hidden="true"
        />
        <p className="leading-relaxed">
          This page is protected by reCAPTCHA and the Google{" "}
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline decoration-gray-400/50 underline-offset-2 transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 rounded-sm"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 underline decoration-gray-400/50 underline-offset-2 transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 rounded-sm"
            aria-label="Terms of Service"
          >
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </div>
    </div>
  );
}
