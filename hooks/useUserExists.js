import { gql, useLazyQuery } from '@apollo/client';

export const USER_EXISTS = gql`
  query userExists($identity: String!) {
    userExists(identity: $identity)
  }
`;

function useUserExists(options = {}) {
  return useLazyQuery(USER_EXISTS, options);
}

export default useUserExists;
