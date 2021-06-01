import { gql } from '@apollo/client';

import { useAuthQuery } from './';

export const GET_CURRENT_PERSON = gql`
  query {
    currentUser {
      id
      rock {
        authToken
      }
      profile {
        id
        firstName
        lastName
        email
        gender
        birthDate
        campus {
          id
          name
        }
        photo {
          uri
        }
      }
    }
  }
`;

function useCurrentPerson(options = {}) {
  const query = useAuthQuery(GET_CURRENT_PERSON, options);

  return {
    currentPerson: query?.data?.currentUser || [],
    ...query,
  };
}

export default useCurrentPerson;
