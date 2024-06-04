import { Router } from "next/router";
import { useEffect } from "react";

import { trackPageView } from "../lib/tracking";

export const useAppAnalytics = (router: Router) => {
  /**
   * Track every page view/change
   */
  useEffect(() => {
    if (router.pathname) trackPageView(router.pathname);
  }, [router.pathname]);
};
