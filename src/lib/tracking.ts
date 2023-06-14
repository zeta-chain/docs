import { AnalyticsBrowser } from "@segment/analytics-next";

/**
 * Segment billing due to MTUs is too high for us, so we want to
 * randomly enable to track only a percentage of the users.
 *
 * Ticket reference: PD-3141
 */
const samplingRate = 0.5;
const shouldLoadAnalytics = Math.random() < samplingRate;

/**
 * @todo (Manu): Get via env vars (need to update docusaurus package first)
 */
const isClientProd =
  typeof window !== "undefined" && window.origin.includes("zetachain.com");

if (!isClientProd) {
  console.error("Not on zetachain.com domain, not loading analytics.");
}

export enum AnalyticsTrackEvents {
  DocsLinkClicked = "docs link clicked",
}

export enum AnalyticsProperties {}

type AnalyticsPropertiesRecord = Partial<
  Record<AnalyticsProperties, string | null>
>;

/**
 * @todo (Manu): Add segment key to env vars (need to update docusaurus package first)
 */
const analytics =
  isClientProd && shouldLoadAnalytics
    ? AnalyticsBrowser.load({ writeKey: "iDHt2XDs8t1eC2SA21Yt2oMFIYR6hDxc" })
    : { track: () => null, page: () => null, identify: () => null };

export const trackEvent = (
  title: AnalyticsTrackEvents,
  properties?: AnalyticsPropertiesRecord
) => {
  if (isClientProd) analytics.track(title, properties);
};

export const trackPageView = (pathname: string) => {
  if (isClientProd) analytics.page(pathname);
};
