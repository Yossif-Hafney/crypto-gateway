"use client";
import SignInForm from "./Components/signinForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPlugin } from "@tanstack/react-form-devtools";

export default function SignInPage() {

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
    >
      <SignInForm />
      {process.env.NODE_ENV === "development" && (
        <TanStackDevtools plugins={[FormDevtoolsPlugin()]} />
      )}
    </GoogleReCaptchaProvider>
  );
}
