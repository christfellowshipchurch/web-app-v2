import { gql, useQuery } from '@apollo/client';

export const GET_FILTERS = gql`
  query getBrowseFilters {
    browseFilters {
      id
      title
    }
  }
`;

function useDiscoverFilters() {
  const query = useQuery(GET_FILTERS);

  return {
    filters: query?.data?.browseFilters || [],
    ...query,
  };
}

export default useDiscoverFilters;
