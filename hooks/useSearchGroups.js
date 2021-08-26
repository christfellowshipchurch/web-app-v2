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
        id
        cursor
        title
        summary
        coverImage {
          sources {
            uri
          }
        }
        relatedNode {
          id

          ... on Url {
            url
          }
        }
        action
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
    dateTime
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
    ...options,
    fetchPolicy: 'network-only',
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
