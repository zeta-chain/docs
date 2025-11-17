import { useRouter } from "next/router";
import { useMemo } from "react";

const stripLocaleSuffix = (segment: string, locale?: string) => {
  if (!locale) return segment;

  const suffix = `.${locale}`;
  return segment.endsWith(suffix) ? segment.slice(0, -suffix.length) : segment;
};

const buildNormalizedRoute = (route: string, locale?: string) => {
  if (!route || route === "/") return "/";

  const segments = route
    .split("/")
    .filter(Boolean)
    .map((segment) => stripLocaleSuffix(segment, locale));

  if (!segments.length) return "/";

  if (segments[segments.length - 1] === "index") {
    segments.pop();
  }

  if (!segments.length) return "/";

  return `/${segments.join("/")}`;
};

export const useNormalizedRoute = () => {
  const { route, locale } = useRouter();

  return useMemo(() => buildNormalizedRoute(route, locale), [route, locale]);
};

export const useIsHomePage = () => {
  const normalizedRoute = useNormalizedRoute();

  return normalizedRoute === "/";
};
