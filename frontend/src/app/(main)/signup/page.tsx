"use client";
import SignUpForm from "./Components/signupForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPlugin } from "@tanstack/react-form-devtools";

export default function SignUpPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
    >
      <SignUpForm />
      {process.env.NODE_ENV === "development" && (
        <TanStackDevtools plugins={[FormDevtoolsPlugin()]} />
      )}
    </GoogleReCaptchaProvider>
  );
}
