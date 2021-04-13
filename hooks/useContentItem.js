import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_ITEM = gql`
  query getUniversalContentItem($itemId: ID!) {
    node(id: $itemId) {
      id
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
        ministry
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
              ... on UniversalContentItem {
                id
                campus {
                  id
                  name
                }
                linkText
                linkURL
              }
              ... on MediaContentItem {
                videos {
                  sources {
                    uri
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
