import { Router } from "next/router";
import { useEffect } from "react";

export const useAppAnalytics = (router: Router) => {
  /**
   * Track every page view/change
   */
  useEffect(() => {
    if (router.pathname) {
    }
  }, [router.pathname]);
};
