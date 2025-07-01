import useSWR from "swr";

import {
  BlogPost,
  EcosystemEvents,
  GetEcosystemEventsCollectionDocument,
  GetEcosystemEventsCollectionQuery,
  GetEngineeringBlogPostsDocument,
  GetEngineeringBlogPostsQuery,
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

  const {
    data: engineeringBlogPostsData,
    error: engineeringBlogPostsError,
    isLoading: isLoadingEngineeringBlogPosts,
  } = useSWR<GetEngineeringBlogPostsQuery, Error>(
    GetEngineeringBlogPostsDocument,
    contentfulFetcher,
    contentfulFetcherOptions
  );

  const engineeringBlogPosts = engineeringBlogPostsError
    ? []
    : ((engineeringBlogPostsData?.docsEngineeringBlogCollection?.items?.[0]?.blogPostsCollection?.items ||
        []) as unknown as BlogPost[]);

  return {
    featuredEcosystemApps,
    isLoadingFeaturedEcosystemApps,

    ecosystemEvents,
    isLoadingEcosystemEvents,

    engineeringBlogPosts,
    isLoadingEngineeringBlogPosts,
  };
};
