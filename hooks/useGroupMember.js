/**
 * useGroupMember.js
 *
 * Author: Caleb Panza
 * Created: Sep 10, 2021
 *
 * Hook for querying and updating a Group Member. Returns an array [query, updateStatus, updateNote] in order to better differentiate the different loading states for each specific use case.
 */

import { gql, useQuery, useMutation } from '@apollo/client';

export const GET_GROUP_MEMBER = gql`
  query getGroupMember($id: ID!) {
    node(id: $id) {
      id
      ... on GroupMember {
        id

        note

        status {
          id
          label
          inactiveReason {
            id
            value
          }
        }

        person {
          id
          birthDate
          email
          firstName
          lastName
          phoneNumber
          photo {
            uri
          }
        }
      }
    }
  }
`;

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
  const query = useQuery(GET_GROUP_MEMBER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  const updateStatus = useMutation(UPDATE_GROUP_MEMBER_STATUS);
  const updateNote = useMutation(UPDATE_GROUP_MEMBER_NOTE);

  // todo : is there a better way to handle this return object?
  return [
    { ...query, groupMember: query?.data?.node },
    updateStatus,
    updateNote,
  ];
}

export default useGroupMember;
