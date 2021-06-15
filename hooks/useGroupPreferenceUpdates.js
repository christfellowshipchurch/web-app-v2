import { gql, useMutation } from '@apollo/client';

export const SUBSCRIBE_TO_UPDATES = gql`
  mutation subscribeToUpdates($groupPreferenceId: ID!, $campusId: ID!) {
    subscribeToGroupPreference(
      groupPreferenceId: $groupPreferenceId
      campusId: $campusId
    )
  }
`;

function useGroupPreferenceUpdates(options = {}) {
  return useMutation(SUBSCRIBE_TO_UPDATES, options);
}

export default useGroupPreferenceUpdates;
