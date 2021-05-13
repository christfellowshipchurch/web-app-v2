import { gql, useQuery } from '@apollo/client';

export const GET_STAFF_MEMBER = gql`
  query getStaffMember($staffId: ID!) {
    node(id: $staffId) {
      ... on Person {
        id
        firstName
        lastName
        position
        photo {
          uri
        }
        htmlContent
        campus {
          name
        }
        facebook
        twitter
        instagram
        website
      }
    }
  }
`;

function useStaffMember(options = {}) {
  const query = useQuery(GET_STAFF_MEMBER, options);

  return {
    staff: query?.data?.edges || [],
    ...query,
  };
}

export default useStaffMember;
