import useSWR from "swr";

import {
  EcosystemEvents,
  GetEcosystemEventsCollectionDocument,
  GetEcosystemEventsCollectionQuery,
  GetFeaturedEcosystemAppsQuery,
} from "../../../generated/contentful.graphql.types";
import { GetFeaturedEcosystemAppsDocument } from "../../../generated/contentful.graphql.types";
import { EcosystemProject } from "../../../generated/contentful.graphql.types";
import { contentfulFetcher, contentfulFetcherOptions } from "../Home.utils";

export const useHomePageContent = () => {
  const {
    data: featuredEcosystemAppsData,
    error: featuredEcosystemAppsError,
    isLoading: isLoadingFeaturedEcosystemApps,
  } = useSWR<GetFeaturedEcosystemAppsQuery, Error>(
    GetFeaturedEcosystemAppsDocument,
    contentfulFetcher,
    contentfulFetcherOptions
  );

  const featuredEcosystemApps = featuredEcosystemAppsError
    ? []
    : ((featuredEcosystemAppsData?.ecosystemProjectCollection?.items || []) as unknown as EcosystemProject[]);

  const {
    data: ecosystemEventsData,
    error: ecosystemEventsError,
    isLoading: isLoadingEcosystemEvents,
  } = useSWR<GetEcosystemEventsCollectionQuery, Error>(
    GetEcosystemEventsCollectionDocument,
    contentfulFetcher,
    contentfulFetcherOptions
  );

  const ecosystemEvents = ecosystemEventsError
    ? []
    : ((ecosystemEventsData?.ecosystemEventsCollection?.items || []) as unknown as EcosystemEvents[]);

  return {
    featuredEcosystemApps,
    isLoadingFeaturedEcosystemApps,

    ecosystemEvents,
    isLoadingEcosystemEvents,
  };
};
