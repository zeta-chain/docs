import { gql } from "graphql-request";

export const FeaturedEcosystemApp = gql`
  fragment FeaturedEcosystemApp on EcosystemProject {
    sys {
      id
    }
    name
    description
    image {
      url
    }
    link
    textColor

    categoryCollection {
      items {
        sys {
          id
        }
      }
    }

    isFeatured
    featuredAppOrder
    featuredCardBackgroundImage {
      url
    }
    featuredCardBorder
    featuredCardLogoBorder
  }
`;

export const GetFeaturedEcosystemApps = gql`
  query GetFeaturedEcosystemApps {
    ecosystemProjectCollection(where: { isFeatured: true }, order: featuredAppOrder_ASC, limit: 5) {
      items {
        ...FeaturedEcosystemApp
      }
    }
  }
`;

export const GetEcosystemAppsCount = gql`
  query GetEcosystemAppsCount {
    ecosystemProjectCollection {
      total
    }
  }
`;
