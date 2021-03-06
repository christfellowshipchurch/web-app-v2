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
          ...groupSearchResultNodeFragment
        }
      }
    }
  }

  fragment groupSearchResultNodeFragment on Node {
    ... on Group {
      preference
      subPreference
      meetingType
      campus {
        name
      }
      dateTime {
        start
      }
    }
    ... on GroupItem {
      members: people(first: 1) {
        totalCount
      }
      leaders: people(first: 3, isLeader: true) {
        totalCount
        edges {
          node {
            id
            firstName
            lastName
            nickName
            photo {
              uri
            }
          }
        }
      }
    }
  }
`;

function useSearchGroups(options = {}) {
  const [searchGroups, query] = useLazyQuery(SEARCH_GROUPS, {
    fetchPolicy: 'cache-and-network',
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
