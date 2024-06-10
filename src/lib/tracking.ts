import { AnalyticsBrowser } from "@segment/analytics-next";

import { isClient, isNodeEnvProd } from "./app.constants";

const samplingRate = 0.5;
const shouldLoadAnalytics = Math.random() < samplingRate;

const isClientProd = isNodeEnvProd && isClient;

export enum AnalyticsTrackEvents {
  DocsLinkClicked = "docs link clicked",
}

export enum AnalyticsProperties {}

type AnalyticsPropertiesRecord = Partial<Record<AnalyticsProperties, string | null>>;

const segmentKey = process.env.NEXT_PUBLIC_SEGMENT_KEY || "";

const analytics =
  isClientProd && shouldLoadAnalytics && segmentKey
    ? AnalyticsBrowser.load({ writeKey: segmentKey })
    : { track: () => null, page: () => null, identify: () => null };

export const trackEvent = (title: AnalyticsTrackEvents, properties?: AnalyticsPropertiesRecord) => {
  if (isClientProd) analytics.track(title, properties);
};

export const trackPageView = (pathname: string) => {
  if (isClientProd) analytics.page(pathname);
};
