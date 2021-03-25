import { gql, useQuery } from '@apollo/client';

export const GET_MESSAGE_GROUP = gql`
  query getMessageGroup($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on UniversalContentItem {
        title
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
            }
          }
        }
      }
    }
  }
`;

function useMessageGroup(options = {}) {
  const query = useQuery(GET_MESSAGE_GROUP, options);

  return {
    group: query?.data?.node,
    ...query,
  };
}

export default useMessageGroup;