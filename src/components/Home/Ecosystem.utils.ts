import { EcosystemProject } from "~/generated/contentful.graphql.types";

/**
 * Parses the card border style based on the defaultCardBorder or featuredCardBorder fields from Contentful
 */
export const parseEcosystemAppCardBorder = (ecosystemAppCardBorder?: string | null) => {
  if (ecosystemAppCardBorder?.startsWith("Light")) return "border border-grey-200 dark:border-none";
  if (ecosystemAppCardBorder?.startsWith("Dark")) return "dark:border dark:border-grey-600";
  return "";
};

/**
 * Parses the logo border style based on the defaultCardLogoBorder or featuredCardLogoBorder fields from Contentful
 */
export const parseEcosystemAppLogoBorder = (ecosystemAppLogoBorder?: string | null) => {
  if (ecosystemAppLogoBorder?.includes("Grey-200")) return "border border-grey-200";
  if (ecosystemAppLogoBorder?.includes("Grey-600")) return "border border-grey-600";
  return "";
};

export const UNIVERSAL_SUB_CATEGORY_ID = "32XHQgC9Od1J60bNN72g8W";

export const isUniversalApp = (app: EcosystemProject) =>
  app?.categoryCollection?.items?.some((category) => category?.sys?.id === UNIVERSAL_SUB_CATEGORY_ID) ?? false;
