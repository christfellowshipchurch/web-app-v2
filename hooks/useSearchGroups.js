import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_GROUPS = gql`
  query searchGroups($query: String!) {
    searchGroups(query: $query) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        __typename
        cursor
        ... on GroupSearchResult {
          title
          summary
          coverImage {
            sources {
              uri
            }
          }
        }
      }
    }
  }
`;

function useSearchGroups(options = {}) {
  return useLazyQuery(SEARCH_GROUPS, options);
}

export default useSearchGroups;
