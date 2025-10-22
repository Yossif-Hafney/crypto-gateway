import { signupAction } from "../actions";

interface HandleSignUpFormSubmitProps {
  value: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
  };
  executeRecaptcha: ((action: string) => Promise<string | null>) | undefined;
  setStatus: (status: {
    type: "success" | "error" | null;
    message: string;
  }) => void;
  setLoading: (loading: boolean) => void;
  form: { reset: () => void };
}

export async function handleSignUpFormSubmit({
  value,
  executeRecaptcha,
  setStatus,
  setLoading,
  form,
}: HandleSignUpFormSubmitProps) {
  setStatus({ type: null, message: "" });
  setLoading(true);
  try {
    if (value.password !== value.confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match." });
      setLoading(false);
      return;
    }
    if (!value.terms) {
      setStatus({
        type: "error",
        message: "You must agree to the Terms and Privacy Policy.",
      });
      setLoading(false);
      return;
    }
    // Check if reCAPTCHA is ready
    if (!executeRecaptcha) {
      setStatus({
        type: "error",
        message:
          "Security verification not ready. Please refresh and try again.",
      });
      setLoading(false);
      return;
    }
    // Generate reCAPTCHA token
    const token = await executeRecaptcha("signup_form");
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
    formData.append("username", value.username);
    formData.append("password", value.password);
    formData.append("token", token);
    const result = await signupAction(formData);
    if (result.ok) {
      setStatus({
        type: "success",
        message: "Account created successfully!",
      });
      form.reset();
    } else {
      setStatus({
        type: "error",
        message: result.error || "Sign up failed.",
      });
    }
  } catch (error) {
    console.error("Signup error:", error);
    setStatus({
      type: "error",
      message:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
    });
  } finally {
    setLoading(false);
  }
}
