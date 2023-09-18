import { gql, useMutation } from '@apollo/client';

export const AUTHENTICATE_PERSON_ID = gql`
  mutation authenticateRockPersonId($personId: String!) {
    authenticateRockPersonId(personId: $personId) {
      token
    }
  }
`;

function useAuthenticateRockPersonId(options = {}) {
  return useMutation(AUTHENTICATE_PERSON_ID, options);
}

export default useAuthenticateRockPersonId;
