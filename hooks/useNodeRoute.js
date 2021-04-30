import { gql, useQuery } from '@apollo/client';

export const GET_NODE_ROUTE = gql`
  query getNodeRoute($id: ID!) {
    node(id: $id) {
      id
      __typename
      ... on NodeRoute {
        routing {
          pathname
        }
      }
    }
  }
`;

function useNodeRoute(options = {}) {
  const query = useQuery(GET_NODE_ROUTE, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    node: query?.data?.node || {},
    ...query,
  };
}

export default useNodeRoute;
