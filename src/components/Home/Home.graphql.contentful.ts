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

export const GetEcosystemEventsCollection = gql`
  query GetEcosystemEventsCollection {
    ecosystemEventsCollection {
      total
      items {
        title
        date
        startTime
        endTime
        location
        description
        logo {
          url
          width
          height
        }
        backgroundColor
        textColor
        backgroundImage {
          url
          width
          height
        }
        mobileBackgroundImage {
          url
          width
          height
        }
        linkLabel
        link
        pillColor
        order
        sys {
          id
        }
      }
    }
  }
`;
