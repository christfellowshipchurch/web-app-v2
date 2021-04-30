import { gql, useQuery } from '@apollo/client';

export const GET_NODE = gql`
  query getNode($id: ID!) {
    node(id: $id) {
      id
      __typename
      ... on ContentNode {
        title
        coverImage {
          sources {
            uri
          }
        }
        htmlContent
      }
    }
  }
`;

function useNode(options = {}) {
  const query = useQuery(GET_NODE, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    item: query?.data?.node || {},
    ...query,
  };
}

export default useNode;
