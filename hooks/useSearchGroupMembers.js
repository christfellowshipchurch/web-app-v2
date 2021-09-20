import { gql, useLazyQuery, useQuery } from '@apollo/client';

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
        coverImage {
          sources {
            uri
          }
        }
        firstName
        lastName
        status
        role
        relatedNode {
          __typename
          id
        }
      }
    }
  }
`;

export const SEARCH_GROUP_MEMBER_FACET_OPTIONS = gql`
  query groupMemberSearchFacetOptions {
    groupMemberSearchFacetOptions {
      key
      values
    }
  }
`;

function useSearchGroupMembers(options = {}) {
  const { data: facetData } = useQuery(SEARCH_GROUP_MEMBER_FACET_OPTIONS, {
    fetchPolicy: 'network-only',
  });
  const [searchGroupMembers, query] = useLazyQuery(SEARCH_GROUP_MEMBERS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return [
    searchGroupMembers,
    {
      groupMembers: query?.data?.searchGroupMembers?.edges,
      ...query,
      facets: facetData?.groupMemberSearchFacetOptions || [],
    },
  ];
}

export default useSearchGroupMembers;
