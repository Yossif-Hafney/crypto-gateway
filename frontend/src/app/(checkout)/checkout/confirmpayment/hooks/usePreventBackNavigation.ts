import { useEffect } from "react";
import { preventBackNavigation } from "../utils/navigationUtils";

/**
 * Custom hook to prevent browser back navigation
 * Useful for pages where users should not be able to go back (e.g., payment confirmation)
 */
export const usePreventBackNavigation = () => {
  useEffect(() => {
    const cleanup = preventBackNavigation();
    return cleanup;
  }, []);
};
