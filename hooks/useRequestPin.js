import { gql, useMutation } from '@apollo/client';

export const REQUEST_PIN = gql`
  mutation requestPin($phone: String!) {
    requestSmsLoginPin(phoneNumber: $phone) {
      success
    }
  }
`;

function useRequestPin(options = {}) {
  return useMutation(REQUEST_PIN, options);
}

export default useRequestPin;
