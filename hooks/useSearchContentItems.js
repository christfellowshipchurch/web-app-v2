import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_CONTENT_ITEMS = gql`
  query search($query: String!, $first: Int, $after: String) {
    search(query: $query, first: $first, after: $after) {
      totalResults
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        cursor
        title
        summary
        coverImage {
          sources {
            uri
          }
        }
        node {
          ... on ContentItem {
            id
            __typename
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
`;

function useSearchContentItems(options = {}) {
  const [search, query] = useLazyQuery(SEARCH_CONTENT_ITEMS, options);

  return [
    search,
    {
      contentItems: query?.data?.search?.edges,
      ...query,
    },
  ];
}

export default useSearchContentItems;
