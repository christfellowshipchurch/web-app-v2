import { gql, useMutation } from '@apollo/client';

// Note: Used as part of the Forgot Password flow

export const REQUEST_EMAIL_PIN = gql`
  mutation requestEmailLoginPin($email: String!) {
    requestEmailLoginPin(email: $email)
  }
`;

function useRequestPin(options = {}) {
  return useMutation(REQUEST_EMAIL_PIN, options);
}

export default useRequestPin;
