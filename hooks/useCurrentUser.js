import { gql } from '@apollo/client';

import { useAuthQuery } from './';

export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      id
      profile {
        id
        email
        firstName
        lastName
        photo {
          uri
        }
        campus {
          id
          name
        }
        phoneNumber
      }
      streamChatToken
    }
  }
`;

function useCurrentUser(options = {}) {
  const query = useAuthQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    currentUser: query?.data?.currentUser || null,
    ...query,
  };
}

export default useCurrentUser;
