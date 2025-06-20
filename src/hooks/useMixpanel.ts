import { useCallback } from "react";

import mixpanelService, { type MixpanelEventProperties, type UserProperties } from "~/lib/analytics/mixpanel";

export const useMixpanel = () => {
  const trackEvent = useCallback((eventName: string, properties?: MixpanelEventProperties) => {
    mixpanelService.track(eventName, properties);
  }, []);

  const trackPageView = useCallback((pageName?: string, properties?: MixpanelEventProperties) => {
    mixpanelService.trackPageView(pageName, properties);
  }, []);

  const trackButtonClick = useCallback(
    (buttonText: string, buttonLocation: string, properties?: MixpanelEventProperties) => {
      mixpanelService.trackButtonClick(buttonText, buttonLocation, properties);
    },
    []
  );

  const trackLinkClick = useCallback(
    (
      linkText: string,
      linkUrl: string,
      linkType: "internal" | "external" = "internal",
      properties?: MixpanelEventProperties
    ) => {
      mixpanelService.trackLinkClick(linkText, linkUrl, linkType, properties);
    },
    []
  );

  const trackNavigation = useCallback(
    (fromSection: string, toSection: string, properties?: MixpanelEventProperties) => {
      mixpanelService.trackNavigation(fromSection, toSection, properties);
    },
    []
  );

  const trackSearchQuery = useCallback((query: string, resultsCount?: number, properties?: MixpanelEventProperties) => {
    mixpanelService.trackSearchQuery(query, resultsCount, properties);
  }, []);

  const trackCodeCopy = useCallback(
    (codeLanguage: string, codeSnippet: string, properties?: MixpanelEventProperties) => {
      mixpanelService.trackCodeCopy(codeLanguage, codeSnippet, properties);
    },
    []
  );

  const trackDocumentDownload = useCallback(
    (documentName: string, documentType: string, properties?: MixpanelEventProperties) => {
      mixpanelService.trackDocumentDownload(documentName, documentType, properties);
    },
    []
  );

  const trackUserEngagement = useCallback(
    (
      engagementType: "scroll_depth" | "time_on_page" | "interaction",
      value: number,
      properties?: MixpanelEventProperties
    ) => {
      mixpanelService.trackUserEngagement(engagementType, value, properties);
    },
    []
  );

  const trackNarrativeChoice = useCallback(
    (narrative: string, choice: string, properties?: MixpanelEventProperties) => {
      mixpanelService.trackNarrativeChoice(narrative, choice, properties);
    },
    []
  );

  const trackReturnVisit = useCallback((daysSinceLastVisit: number, properties?: MixpanelEventProperties) => {
    mixpanelService.trackReturnVisit(daysSinceLastVisit, properties);
  }, []);

  const trackThemeToggle = useCallback((newTheme: "light" | "dark", properties?: MixpanelEventProperties) => {
    mixpanelService.trackThemeToggle(newTheme, properties);
  }, []);

  const identify = useCallback((userId: string) => {
    mixpanelService.identify(userId);
  }, []);

  const setUserProperties = useCallback((properties: UserProperties) => {
    mixpanelService.setUserProperties(properties);
  }, []);

  const alias = useCallback((userId: string) => {
    mixpanelService.alias(userId);
  }, []);

  const reset = useCallback(() => {
    mixpanelService.reset();
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackLinkClick,
    trackNavigation,
    trackSearchQuery,
    trackCodeCopy,
    trackDocumentDownload,
    trackUserEngagement,
    trackNarrativeChoice,
    trackReturnVisit,
    trackThemeToggle,
    identify,
    setUserProperties,
    alias,
    reset,
  };
};

export default useMixpanel;
