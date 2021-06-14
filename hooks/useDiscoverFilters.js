import { gql, useQuery } from '@apollo/client';

export const GET_FILTERS = gql`
  query getBrowseFilters {
    browseFilters {
      id
      title
    }
  }
`;

function useDiscoverFilters(options) {
  const query = useQuery(GET_FILTERS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    filters: query?.data?.browseFilters || [],
    ...query,
  };
}

export default useDiscoverFilters;
