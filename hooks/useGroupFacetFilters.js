import { gql, useQuery } from '@apollo/client';

export const GET_GROUP_FACET_FILTERS = gql`
  query getGroupFacetFilters($facet: String!, $facetFilters: [String]) {
    groupFacetFilters(facet: $facet, facetFilters: $facetFilters)
  }
`;

function useGroupFacetFilters(options = {}) {
  const query = useQuery(GET_LINEUPS, options);

  return {
    facets: query?.data?.groupFacetFilters || [],
    ...query,
  };
}

export default useGroupFacetFilters;
