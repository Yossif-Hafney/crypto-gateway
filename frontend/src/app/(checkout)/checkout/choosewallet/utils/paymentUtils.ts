import { setCheckoutStep } from "../../utils/checkoutApiUtils";

/**
 * Handles the confirm and pay action
 * Sets the payment step cookie and navigates to confirmation page
 */
export const handleConfirmAndPay = async (router: {
  replace: (url: string) => void;
}) => {
  const success = await setCheckoutStep("confirmpayment");

  if (success) {
    // Use replace to prevent going back
    router.replace("/checkout/confirmpayment");
  } else {
    console.error("Failed to set payment step. Please try again.");
  }
};
