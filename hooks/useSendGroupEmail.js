/**
 * useSendGroupEmail.js
 *
 * Author: Daniel Wood
 * Created: Dec 16, 2021
 *
 * Hook for sending a group member email
 */

import { gql, useMutation } from '@apollo/client';

export const SEND_EMAIL = gql`
  mutation GroupEmail($input: GroupEmailInput!) {
    sendGroupEmail(input: $input)
  }
`;

function useSendGroupEmail(options) {
  const mutation = useMutation(SEND_EMAIL, options);

  return mutation;
}

export default useSendGroupEmail;
