/**
 * useGroupMember.js
 *
 * Author: Caleb Panza
 * Created: Sep 20, 2021
 *
 * Hook for updating a Group Member. Returns an array [updateStatus, updateNote] in order to better differentiate the different loading states for each specific mutation.
 */

import { gql, useMutation } from '@apollo/client';

export const UPDATE_GROUP_MEMBER_STATUS = gql`
  mutation updateGroupMemberStatus(
    $groupMemberId: ID!
    $groupMemberStatusId: ID!
    $inactiveStatusReasonId: ID
  ) {
    updateGroupMemberStatus(
      groupMemberId: $groupMemberId
      groupMemberStatusId: $groupMemberStatusId
      inactiveStatusReasonId: $inactiveStatusReasonId
    ) {
      id
    }
  }
`;

export const UPDATE_GROUP_MEMBER_NOTE = gql`
  mutation updateGroupMemberNote($groupMemberId: ID!, $note: String) {
    updateGroupMemberNote(groupMemberId: $groupMemberId, text: $note) {
      id
    }
  }
`;

function useGroupMember(options = {}) {
  const updateStatus = useMutation(UPDATE_GROUP_MEMBER_STATUS, options);
  const updateNote = useMutation(UPDATE_GROUP_MEMBER_NOTE, options);

  return [updateStatus, updateNote];
}

export default useGroupMember;
