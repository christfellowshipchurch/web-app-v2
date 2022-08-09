/**
 * useSubmitSetReminder.js
 *
 * Author: Daniel Wood
 * Created: June 18, 2022
 *
 * Hook for triggering the Set a Reminder workflow.
 */

import { gql, useMutation } from '@apollo/client';

export const SUBMIT_SET_REMINDER = gql`
  mutation setAReminder(
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $campus: String!
    $serviceTime: String!
  ) {
    submitSetReminder(
      input: [
        { field: "firstName", value: $firstName }
        { field: "lastName", value: $lastName }
        { field: "email", value: $email }
        { field: "phoneNumber", value: $phoneNumber }
        { field: "campus", value: $campus }
        { field: "serviceTime", value: $serviceTime }
      ]
    )
  }
`;

function useSubmitSetReminder(options = {}) {
  const submitReminder = useMutation(SUBMIT_SET_REMINDER, options);

  return submitReminder;
}

export default useSubmitSetReminder;
