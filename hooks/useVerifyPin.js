import { gql, useMutation } from '@apollo/client';

export const VERIFY_PIN = gql`
  mutation verifyPin($phone: String!, $code: String!) {
    authenticateWithSms(phoneNumber: $phone, pin: $code) {
      token
    }
  }
`;

function useVerifyPin(options = {}) {
  return useMutation(VERIFY_PIN, options);
}

export default useVerifyPin;
