import { setCheckoutStep } from "../utils/checkoutApiUtils";

/**
 * Handles the continue action from checkout page
 * Sets the choosewallet step cookie and navigates to choose wallet page
 */
export const handleContinue = async (router: {
  push: (url: string) => void;
}) => {
  const success = await setCheckoutStep("choosewallet");

  if (success) {
    router.push("/checkout/choosewallet");
  } else {
    console.error("Failed to set checkout step. Please try again.");
  }
};
