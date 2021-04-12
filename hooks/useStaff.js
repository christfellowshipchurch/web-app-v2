import { gql, useQuery } from '@apollo/client';

export const GET_STAFF = gql`
  query getStaff($ministry: String!) {
    getStaff(ministry: $ministry) {
      firstName
      lastName
      photo {
        uri
      }
      campus {
        name
      }
    }
  }
`;

function useStaff(options = {}) {
  const query = useQuery(GET_STAFF, options);

  return {
    staff: query?.data?.edges || [],
    ...query,
  };
}

export default useStaff;
