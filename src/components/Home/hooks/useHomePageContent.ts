import useSWR from "swr";

import {
  EcosystemProject,
  GetFeaturedEcosystemAppsDocument,
  GetFeaturedEcosystemAppsQuery,
} from "../../../generated/contentful.graphql.types";
import { CONTENTFUL_CACHE_KEYS } from "../../../lib/cache-keys";
import { contentfulFetcher, contentfulFetcherOptions } from "../Home.utils";

export const useHomePageContent = () => {
  const {
    data: featuredEcosystemAppsData,
    error: featuredEcosystemAppsError,
    isLoading: isLoadingFeaturedEcosystemApps,
  } = useSWR<GetFeaturedEcosystemAppsQuery, Error>(
    [GetFeaturedEcosystemAppsDocument, CONTENTFUL_CACHE_KEYS.FEATURED_ECOSYSTEM_APPS],
    ([query, cacheKey]: [string, string]) => contentfulFetcher(query, cacheKey),
    contentfulFetcherOptions
  );

  const featuredEcosystemApps = featuredEcosystemAppsError
    ? []
    : ((featuredEcosystemAppsData?.ecosystemProjectCollection?.items || []) as unknown as EcosystemProject[]);

  return {
    featuredEcosystemApps,
    isLoadingFeaturedEcosystemApps,
  };
};
