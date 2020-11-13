import { gql, useMutation } from '@apollo/client';

export const REGISTER_WITH_EMAIL = gql`
  mutation register(
    $identity: String!
    $password: String!
    $userProfile: [UpdateProfileInput]
  ) {
    registerPerson(
      email: $identity
      password: $password
      userProfile: $userProfile
    ) {
      token
      user {
        id
        profile {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

function useRegisterWithEmail(options = {}) {
  return useMutation(REGISTER_WITH_EMAIL, options);
}

export default useRegisterWithEmail;
