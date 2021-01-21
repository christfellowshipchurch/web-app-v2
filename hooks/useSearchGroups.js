import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_GROUPS = gql`
  query searchGroups($query: String!) {
    searchGroups(query: $query) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        cursor
        ...groupSearchResult
      }
    }
  }

  fragment groupSearchResult on GroupSearchResult {
    id
    title
    summary
    coverImage {
      sources {
        uri
      }
    }
  }
`;

function useSearchGroups(options = {}) {
  const [searchGroups, query] = useLazyQuery(SEARCH_GROUPS, options);

  return [
    searchGroups,
    {
      groups: query?.data?.searchGroups?.edges,
      ...query,
    },
  ];
}

export default useSearchGroups;
