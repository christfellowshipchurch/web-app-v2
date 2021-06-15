import { gql, useQuery } from '@apollo/client';

export const GET_CATEGORIES_FROM_FILTER = gql`
  query getFilterCategories($id: ID!) {
    node(id: $id) {
      id
      ... on ContentItem {
        title

        childContentItemsConnection {
          edges {
            node {
              id
              title
            }
          }
        }
      }
      ... on NodeRoute {
        routing {
          pathname
        }
      }
    }
  }
`;

function useDiscoverFilterCategories(options = {}) {
  const query = useQuery(GET_CATEGORIES_FROM_FILTER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    categories: query?.data?.node?.childContentItemsConnection?.edges || [],
    ...query,
  };
}

export default useDiscoverFilterCategories;
