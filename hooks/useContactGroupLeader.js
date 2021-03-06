import { gql, useMutation } from '@apollo/client';

export const CONTACT_GROUP_LEADER = gql`
  mutation contactGroupLeader($groupId: ID!) {
    contactGroupLeader(groupId: $groupId)
  }
`;

function useContactGroupLeader(options = {}) {
  return useMutation(CONTACT_GROUP_LEADER, options);
}

export default useContactGroupLeader;
