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
      mapLink
      phoneNumber
      serviceTimes {
        day
        time
      }
      weekdaySchedules {
        monday {
          title
          time
          url
        }
        tuesday {
          title
          time
          url
        }
        wednesday {
          title
          time
          url
        }
        thursday {
          title
          time
          url
        }
        friday {
          title
          time
          url
        }
        saturday {
          title
          time
          url
        }
        sunday {
          title
          time
          url
        }
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
