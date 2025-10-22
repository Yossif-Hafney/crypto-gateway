"use client";

import { ContactForm } from "./Components/ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPlugin } from "@tanstack/react-form-devtools";
/**
 * Contact Page Component
 * - Displays contact information and form
 * - Integrates Google reCAPTCHA v3 for spam protection
 */
export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
    >
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent from-primary/10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                We&apos;re here to help. Get in touch with our team for any
                questions or support.
              </p>
            </div>

            <div className="mt-16 grid gap-16 md:grid-cols-2 lg:gap-24">
              {/* INFO SECTION */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get In Touch
                  </h3>
                  <p className="text-gray-400">
                    We&apos;re here to help with all your crypto payment needs.
                    Whether you have questions about integration, pricing, or
                    technical support, our team is ready to assist you.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Email Us
                      </h4>
                      <a
                        href="mailto:support@coingate.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        support@coingate.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Call Us
                      </h4>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Live Chat
                      </h4>
                      <p className="text-gray-400">Available 24/7</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Instant support for urgent inquiries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM SECTION */}
              <div className="rounded-xl p-8 shadow-lg bg-background-dark/70 border border-primary/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Send us a message
                </h3>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {process.env.NODE_ENV === "development" && (
        <TanStackDevtools plugins={[FormDevtoolsPlugin()]} />
      )}
    </GoogleReCaptchaProvider>
  );
}
