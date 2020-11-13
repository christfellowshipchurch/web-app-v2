import { gql, useMutation } from '@apollo/client';

export const REGISTER_WITH_SMS = gql`
  mutation registerWithSms(
    $identity: String!
    $password: String!
    $userProfile: [UpdateProfileInput]
  ) {
    registerWithSms(
      phoneNumber: $identity
      pin: $password
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

function useRegisterWithSms(options = {}) {
  return useMutation(REGISTER_WITH_SMS, options);
}

export default useRegisterWithSms;
