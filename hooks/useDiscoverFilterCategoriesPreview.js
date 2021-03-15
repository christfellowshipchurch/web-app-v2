import { gql, useQuery } from '@apollo/client';

export const GET_CATEGORIES_FILTER_PREVIEW = gql`
  query getFilterCategories($id: ID!, $first: Int) {
    node(id: $id) {
      id
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
            }
          }
        }
      }
    }
  }
`;

function useDiscoverFilterCategoriesPreview(options = {}) {
  const query = useQuery(GET_CATEGORIES_FILTER_PREVIEW, options);

  return {
    categories: query?.data?.node?.childContentItemsConnection?.edges || [],
    ...query,
  };
}

export default useDiscoverFilterCategoriesPreview;
