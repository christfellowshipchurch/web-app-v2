import { gql, useQuery } from '@apollo/client';

export const GET_CATEGORIES_FILTER_PREVIEW = gql`
  query getFilterCategories($id: ID!, $first: Int) {
    node(id: $id) {
      id
      title
      ... on ContentItem {
        title
        childContentItemsConnection(first: $first) {
          edges {
            node {
              id
              title
              summary
              coverImage {
                name
                sources {
                  uri
                }
              }
              ... on NodeRoute {
                routing {
                  pathname
                }
              }
            }
          }
        }
      }
    }
  }
`;

function useDiscoverFilterCategoriesPreview(options = {}) {
  const query = useQuery(GET_CATEGORIES_FILTER_PREVIEW, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    categoryTitle: query?.data?.node?.title,
    contentItems:
      query?.data?.node?.childContentItemsConnection?.edges.map(n => n.node) ||
      [],
    ...query,
  };
}

export default useDiscoverFilterCategoriesPreview;
