/**
 * Sets the checkout step cookie via API
 */
export const setCheckoutStep = async (step: string): Promise<boolean> => {
  try {
    const response = await fetch("/api/checkout-step", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ step }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error setting checkout step:", error);
    return false;
  }
};
