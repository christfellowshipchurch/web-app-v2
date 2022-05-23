import { gql, useQuery } from '@apollo/client';

export const GET_CAMPUS = gql`
  query getCampusInfo($campusName: String!) {
    campus(name: $campusName) {
      id
      name
      pastor {
        firstName
        lastName
        photo {
          uri
        }
      }
      city
      street1
      state
      postalCode
      phoneNumber
      serviceTimes {
        day
        time
      }
    }
  }
`;

function useCampus(options) {
  const query = useQuery(GET_CAMPUS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    campus: query?.data?.campus || [],
    ...query,
  };
}

export default useCampus;
