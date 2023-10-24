import { gql, useQuery } from '@apollo/client';

export const GET_CAMPUSES = gql`
  query getCampuses($latitude: Float, $longitude: Float) {
    campuses {
      name
      distanceFromLocation(
        location: { latitude: $latitude, longitude: $longitude }
      )
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
