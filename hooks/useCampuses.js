import { gql, useQuery } from '@apollo/client';

export const GET_CAMPUSES = gql`
  query {
    campuses {
      id
      name
    }
  }
`;

function useCampuses(options) {
  const query = useQuery(GET_CAMPUSES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    campuses: query?.data?.campuses || [],
    ...query,
  };
}

export default useCampuses;
