import { gql } from "graphql-request";

export const GetFeaturedEcosystemApps = gql`
  query GetFeaturedEcosystemApps {
    ecosystemProjectCollection(where: { isFeatured: true }, order: featuredAppOrder_ASC, limit: 5) {
      items {
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
    }
  }
`;
