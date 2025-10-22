import { z } from "zod";
import { contactAction } from "../actions";

interface HandleContactFormSubmitProps {
  value: { name: string; email: string; message: string };
  executeRecaptcha: ((action: string) => Promise<string | null>) | undefined;
  setSubmitStatus: (status: {
    type: "success" | "error" | null;
    message: string;
  }) => void;
  setIsSending: (sending: boolean) => void;
  form: { reset: () => void };
}

export async function handleContactFormSubmit({
  value,
  executeRecaptcha,
  setSubmitStatus,
  setIsSending,
  form,
}: HandleContactFormSubmitProps) {
  setSubmitStatus({ type: null, message: "" });

  // Validate all fields before submission
  const nameValidation = z.string().min(2).safeParse(value.name);
  const emailValidation = z.string().email().safeParse(value.email);
  const messageValidation = z.string().min(10).safeParse(value.message);

  if (
    !nameValidation.success ||
    !emailValidation.success ||
    !messageValidation.success
  ) {
    setSubmitStatus({
      type: "error",
      message: "Please fill in all fields correctly before submitting.",
    });
    return;
  }

  // Check if reCAPTCHA is ready
  if (!executeRecaptcha) {
    setSubmitStatus({
      type: "error",
      message: "Security verification not ready. Please refresh and try again.",
    });
    return;
  }

  setIsSending(true);

  // Generate reCAPTCHA token
  const token = await executeRecaptcha("contact_form");
  if (!token) {
    setSubmitStatus({
      type: "error",
      message: "Security verification failed. Please try again.",
    });
    setIsSending(false);
    return;
  }

  // Run contactAction first
  const formData = new FormData();
  formData.append("name", value.name);
  formData.append("email", value.email);
  formData.append("message", value.message);
  formData.append("token", token);
  const actionResult = await contactAction(formData);

  // Then run API call
  const apiRes = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyName: value.name,
      email: value.email,
      message: value.message,
      token,
    }),
  });
  const apiResult = await apiRes.json();
  setIsSending(false);

  // Combine results for feedback
  if ((actionResult && actionResult.ok) || (apiResult && apiResult.success)) {
    setSubmitStatus({
      type: "success",
      message:
        apiResult.message ||
        "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    });
    form.reset();

    // Emit socket event with the database ID from the API response
    if (apiResult.id) {
      const { emitContact } = await import("@/lib/socket");
      emitContact({
        id: String(apiResult.id), // Use ONLY the integer database ID
        name: value.name,
        email: value.email,
        message: value.message,
        companyName: value.name,
        timestamp: new Date().toISOString(),
      });
    }
  } else {
    setSubmitStatus({
      type: "error",
      message: apiResult.error || "Failed to send message. Please try again.",
    });
  }
}
