import { gql, useQuery } from '@apollo/client';

export const GET_GROUP_MEMBER_STATUS = gql`
  query getGroupMembersStatus($groupId: ID!) {
    groupMemberStatus(groupId: $groupId)
  }
`;

function useGroupMemberStatus(options = {}) {
  const query = useQuery(GET_GROUP_MEMBER_STATUS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return query;
}

export default useGroupMemberStatus;
