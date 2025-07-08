export const CONTENTFUL_CACHE_KEYS = {
  FEATURED_ECOSYSTEM_APPS: "featured-ecosystem-apps",
  ECOSYSTEM_EVENTS: "ecosystem-events",
  ENGINEERING_BLOG_POSTS: "engineering-blog-posts",
} as const;

export type ContentfulCacheKey = typeof CONTENTFUL_CACHE_KEYS[keyof typeof CONTENTFUL_CACHE_KEYS];
