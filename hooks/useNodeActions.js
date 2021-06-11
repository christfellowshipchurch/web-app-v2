import { gql, useQuery } from '@apollo/client';

export const GET_NODE_ACTIONS = gql`
  query getContentActions($nodeId: ID!) {
    nodeActions(nodeId: $nodeId) {
      action
      title
      relatedNode {
        id
        __typename
        ... on Url {
          url
        }
      }
    }
  }
`;

function useNodeActions(options = {}) {
  const query = useQuery(GET_NODE_ACTIONS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    actions: query?.data?.nodeActions || [],
    ...query,
  };
}

export default useNodeActions;
