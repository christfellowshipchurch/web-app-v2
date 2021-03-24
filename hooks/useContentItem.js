import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_ITEM = gql`
  query getUniversalContentItem($itemId: ID!) {
    node(id: $itemId) {
      __typename
      ... on UniversalContentItem {
        title
        summary
        subtitle
        htmlContent
        ctaLinks {
          title
          body
          image {
            sources {
              uri
            }
          }
          buttonText
          buttonLink
        }
        staff {
          members {
            firstName
            lastName
            photo {
              uri
            }
            campus {
              name
            }
          }
        }
        sharing {
          url
        }
        coverImage {
          sources {
            uri
          }
        }
        childContentItemsConnection {
          edges {
            node {
              id
              title
              summary
              coverImage {
                sources {
                  uri
                }
              }
              images {
                sources {
                  uri
                }
              }
              parentChannel {
                id
              }
              ... on FeaturesNode {
                featureFeed {
                  features {
                    ... on ButtonFeature {
                      action {
                        relatedNode {
                          ... on Url {
                            url
                          }
                        }
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, options);

  return {
    item: query?.data?.node || [],
    ...query,
  };
}

export default useContentItem;
