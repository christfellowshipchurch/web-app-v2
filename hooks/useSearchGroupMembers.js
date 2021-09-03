import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_GROUP_MEMBERS = gql`
  query searchGroupMembers(
    $query: SearchQueryInput!
    $first: Int
    $after: String
  ) {
    searchGroupMembers(query: $query, first: $first, after: $after) {
      totalResults
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        id
      }
    }
  }
`;

function useSearchGroupMembers(options = {}) {
  const [searchGroupMembers, query] = useLazyQuery(SEARCH_GROUP_MEMBERS, {
    fetchPolicy: 'no-cache',
    ...options,
  });

  return [
    searchGroupMembers,
    {
      groupMembers: query?.data?.searchGroupMembers?.edges,
      ...query,
    },
  ];
}

export default useSearchGroupMembers;
