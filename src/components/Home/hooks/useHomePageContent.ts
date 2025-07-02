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

  const {
    data: ecosystemEventsData,
    error: ecosystemEventsError,
    isLoading: isLoadingEcosystemEvents,
  } = useSWR<GetEcosystemEventsCollectionQuery, Error>(
    [GetEcosystemEventsCollectionDocument, CONTENTFUL_CACHE_KEYS.ECOSYSTEM_EVENTS],
    ([query, cacheKey]: [string, string]) => contentfulFetcher(query, cacheKey),
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
    [GetEngineeringBlogPostsDocument, CONTENTFUL_CACHE_KEYS.ENGINEERING_BLOG_POSTS],
    ([query, cacheKey]: [string, string]) => contentfulFetcher(query, cacheKey),
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
