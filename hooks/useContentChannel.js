import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_CHANNEL = gql`
  query getContentChannel($itemId: ID!) {
    node(id: $itemId) {
      ... on ContentChannel {
        childContentItemsConnection {
          edges {
            node {
              ...on UniversalContentItem {
                title
                subtitle
                isFeatured
                id
                sharing {
                  url
                }
                coverImage {
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

function useContentChannel(options = {}) {
  const query = useQuery(GET_CONTENT_CHANNEL, options);

  return {
    content: query?.data?.node?.childContentItemsConnection || [],
    ...query,
  };
}

export default useContentChannel;
