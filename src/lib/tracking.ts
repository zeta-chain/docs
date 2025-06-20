import mixpanelService from "./analytics/mixpanel";
import { isClient, isNodeEnvProd } from "./app.constants";

const samplingRate = 0.5;
const shouldLoadAnalytics = Math.random() < samplingRate;

const isClientProd = isNodeEnvProd && isClient;

export enum AnalyticsTrackEvents {
  DocsLinkClicked = "docs link clicked",
  PageView = "page view",
  ButtonClick = "button click",
  NavigationEvent = "navigation event",
  SearchQuery = "search query",
  CodeCopy = "code copy",
  UserEngagement = "user engagement",
}

export enum AnalyticsProperties {
  PagePath = "page_path",
  ButtonText = "button_text",
  LinkUrl = "link_url",
  SearchQuery = "search_query",
  CodeLanguage = "code_language",
}

type AnalyticsPropertiesRecord = Partial<Record<AnalyticsProperties, string | null>>;

export const trackEvent = (title: AnalyticsTrackEvents, properties?: AnalyticsPropertiesRecord) => {
  if (!isClient || !shouldLoadAnalytics) return;

  try {
    mixpanelService.track(title, properties as any);
  } catch (error) {
    console.error("Failed to track event:", error);
  }
};

export const trackPageView = (pathname: string) => {
  if (!isClient || !shouldLoadAnalytics) return;

  try {
    mixpanelService.trackPageView(pathname);
  } catch (error) {
    console.error("Failed to track page view:", error);
  }
};
