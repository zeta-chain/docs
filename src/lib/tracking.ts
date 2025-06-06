import { isClient, isNodeEnvProd } from "./app.constants";

const samplingRate = 0.5;
const shouldLoadAnalytics = Math.random() < samplingRate;

const isClientProd = isNodeEnvProd && isClient;

export enum AnalyticsTrackEvents {
  DocsLinkClicked = "docs link clicked",
}

export enum AnalyticsProperties {}

type AnalyticsPropertiesRecord = Partial<Record<AnalyticsProperties, string | null>>;

export const trackEvent = (title: AnalyticsTrackEvents, properties?: AnalyticsPropertiesRecord) => {
  // Do nothing
};

export const trackPageView = (pathname: string) => {
  // Do nothing
};
