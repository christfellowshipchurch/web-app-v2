/**
 * useSubmitConnectCard.js
 *
 * Author: Daniel Wood
 * Created: June 8, 2022
 *
 * Hook for triggering the Digital Connect Card workflow.
 */

import { gql, useMutation } from '@apollo/client';

export const SUBMIT_CONNNECT_CARD = gql`
  mutation digitalConnectCard(
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $emailAddress: String!
    $campus: String!
    $decision: String!
    $allThatApplies: String!
  ) {
    submitConnectCard(
      input: [
        { field: "firstName", value: $firstName }
        { field: "lastName", value: $lastName }
        { field: "emailAddress", value: $emailAddress }
        { field: "phoneNumber", value: $phoneNumber }
        { field: "campus", value: $campus }
        { field: "decision", value: $decision }
        { field: "allThatApplies", value: $allThatApplies }
      ]
    )
  }
`;

function useSubmitConnectCard(options = {}) {
  const submitConnectCard = useMutation(SUBMIT_CONNNECT_CARD, options);

  return submitConnectCard;
}

export default useSubmitConnectCard;
