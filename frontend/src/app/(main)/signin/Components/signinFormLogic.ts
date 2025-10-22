import { signinActionWithAuth } from "../actions";

interface HandleSignInFormSubmitProps {
  value: { email: string; password: string };
  executeRecaptcha: ((action: string) => Promise<string | null>) | undefined;
  setStatus: (status: {
    type: "success" | "error" | null;
    message: string;
  }) => void;
  setLoading: (loading: boolean) => void;
}

export async function handleSignInFormSubmit({
  value,
  executeRecaptcha,
  setStatus,
  setLoading,
}: HandleSignInFormSubmitProps) {
  setStatus({ type: null, message: "" });
  setLoading(true);
  // Check if reCAPTCHA is ready
  if (!executeRecaptcha) {
    setStatus({
      type: "error",
      message: "Security verification not ready. Please refresh and try again.",
    });
    setLoading(false);
    return;
  }
  // Generate reCAPTCHA token
  const token = await executeRecaptcha("signin_form");
  if (!token) {
    setStatus({
      type: "error",
      message: "Security verification failed. Please try again.",
    });
    setLoading(false);
    return;
  }
  const formData = new FormData();
  formData.append("email", value.email);
  formData.append("password", value.password);
  formData.append("token", token);

  try {
    const result = await signinActionWithAuth(formData);
    if (result && !result.ok) {
      setStatus({
        type: "error",
        message: result.error ?? "Login failed. Please try again.",
      });
      setLoading(false);
    }
  } catch (error) {
    if (error instanceof Error && !error.message.includes("NEXT_REDIRECT")) {
      console.error("Login error:", error);
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
      setLoading(false);
    }
    // If it's NEXT_REDIRECT, the navigation is happening - do nothing
  }
}
