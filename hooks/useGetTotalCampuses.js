import { gql, useQuery } from '@apollo/client';

export const TOTAL_CAMPUSES = gql`
  query getTotalCampuses {
    campuses {
      name
    }
  }
`;

function useGetTotalCampuses(options = {}) {
  const query = useQuery(TOTAL_CAMPUSES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    totalCampuses: query?.data?.campuses,
    ...query,
  };
}

export default useGetTotalCampuses;
