/**
 * Prevents browser back navigation by pushing a dummy state
 * and blocking the popstate event
 */
export const preventBackNavigation = () => {
  // Push a dummy state to prevent back button
  window.history.pushState(null, "", window.location.href);

  const handlePopState = () => {
    window.history.pushState(null, "", window.location.href);
  };

  window.addEventListener("popstate", handlePopState);

  // Return cleanup function
  return () => {
    window.removeEventListener("popstate", handlePopState);
  };
};
