import { gql } from '@apollo/client';

import { useAuthQuery } from './';

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      profile {
        firstName
        lastName
        photo {
          uri
        }
        campus {
          id
          name
        }
      }
    }
  }
`;

function useCurrentUser(options = {}) {
  const query = useAuthQuery(GET_CURRENT_USER, options);

  return {
    currentUser: query?.data?.currentUser || [],
    ...query,
  };
}

export default useCurrentUser;
