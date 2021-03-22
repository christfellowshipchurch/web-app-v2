import { gql, useQuery } from '@apollo/client';

export const GET_MESSAGE_CHANNEL = gql`
  query getMessageChannel($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on UniversalContentItem {
        title
        childContentItemsConnection {
          edges {
            node {
              id
              title
            }
          }
        }
        subtitle
        isFeatured
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
`;

function useMessageChannel(options = {}) {
  const query = useQuery(GET_MESSAGE_CHANNEL, options);

  return {
    channel: query?.data?.node,
    ...query,
  };
}

export default useMessageChannel;
