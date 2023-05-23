import { useLocation } from "@docusaurus/router";
import { useEffect } from "react";

import { trackPageView } from "../lib/tracking";

export const useSubscribeToPageChangeAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
};
