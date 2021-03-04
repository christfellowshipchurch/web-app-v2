
import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_CHANNEL = gql`
  query getContentChannel($itemId: ID!) {
      node(id: $itemId) {
        ... on ContentChannel {
          childContentItemsConnection {
            edges {
              node {
                title
                id
                sharing {
                  url
                }
              }
            }
          }
        }
      }
    }`;

function useContentChannel(options = {}) {
  const query = useQuery(GET_CONTENT_CHANNEL, options);

  return {
    content: query?.data?.node?.childContentItemsConnection || [],
    ...query,
  };
}

export default useContentChannel;
