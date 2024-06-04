import { AnalyticsBrowser } from "@segment/analytics-next";

import { environment } from "../env.cjs";
import { isClient, isNodeEnvProd, isVercelProd } from "./app.constants";

const samplingRate = 0.5;
const shouldLoadAnalytics = Math.random() < samplingRate;

const isClientProd = isNodeEnvProd && isVercelProd && isClient;

export enum AnalyticsTrackEvents {
  DocsLinkClicked = "docs link clicked",
}

export enum AnalyticsProperties {}

type AnalyticsPropertiesRecord = Partial<Record<AnalyticsProperties, string | null>>;

const segmentKey = environment.NEXT_PUBLIC_SEGMENT_KEY || "";

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
