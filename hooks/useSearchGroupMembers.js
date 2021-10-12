import { gql, useLazyQuery, useQuery } from '@apollo/client';

import { GROUP_MEMBER_FRAGMENT } from './useGroupMember';

export const SEARCH_GROUP_MEMBERS = gql`
  query searchGroupMembers(
    $groupId: ID!
    $query: SearchQueryInput!
  ) {
    searchGroupMembers(groupId: $groupId, query: $query) {
      ...groupMemberFragment
    }
  }

  ${GROUP_MEMBER_FRAGMENT}
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
    nextFetchPolicy: 'cache-first',
    ...options,
  });

  return [
    searchGroupMembers,
    {
      groupMembers: query?.data?.searchGroupMembers ??[],
      ...query,
      facets: facetData?.groupMemberSearchFacetOptions || [],
    },
  ];
}

export default useSearchGroupMembers;
