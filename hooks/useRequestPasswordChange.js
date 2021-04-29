import { gql, useMutation } from '@apollo/client';

export const REQUEST_PASSWORD_CHANGE = gql`
  mutation changePasswordWithPin(
    $email: String!
    $pin: String!
    $newPassword: String!
  ) {
    changePasswordWithPin(email: $email, pin: $pin, newPassword: $newPassword) {
      token
    }
  }
`;

function useRequestPin(options = {}) {
  return useMutation(REQUEST_PASSWORD_CHANGE, options);
}

export default useRequestPin;
