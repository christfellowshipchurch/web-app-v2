/**
 * useAddGroupMember.js
 *
 * Author: Caleb Panza
 * Created: Sep 12, 2021
 *
 * Hook for adding a new person to a Group.
 */

import { gql, useMutation } from '@apollo/client';

export const ADD_NEW_GROUP_MEMBER = gql`
  mutation addGroupMember($groupId: ID!, $person: PersonInput!) {
    addPersonToGroup(groupId: $groupId, person: $person) {
      id
    }
  }
`;

function useAddGroupMember(options = {}) {
  const addNewGroupMember = useMutation(ADD_NEW_GROUP_MEMBER, options);

  return addNewGroupMember;
}

export default useAddGroupMember;
