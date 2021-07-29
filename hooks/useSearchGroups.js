import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_GROUPS = gql`
  query searchGroups($query: SearchQueryInput!, $first: Int, $after: String) {
    searchGroups(query: $query, first: $first, after: $after) {
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
          id

          ... on Url {
            url
          }
        }
        ...groupSearchResultNodeFragment
      }
    }
  }

  fragment groupSearchResultNodeFragment on GroupSearchResult {
    preferences
    subPreferences
    meetingDay
    meetingType
    campusName
    leaders {
      firstName
      lastName
      photo {
        uri
      }
    }
  }
`;

function useSearchGroups(options = {}) {
  const [searchGroups, query] = useLazyQuery(SEARCH_GROUPS, {
    fetchPolicy: 'network-only',
    ...options,
  });

  return [
    searchGroups,
    {
      groups: query?.data?.searchGroups?.edges,
      ...query,
    },
  ];
}

export default useSearchGroups;
