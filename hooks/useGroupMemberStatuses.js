import { gql, useQuery } from '@apollo/client';

export const GET_GROUP_MEMBER_STATUSES = gql`
  query groupMemberStatuses {
    groupMemberStatuses {
      id
      label
    }
  }

  query inactiveStatusReasons {
    inactiveStatusReasons {
      id
      value
    }
  }
`;

function useGroupMemberStatuses(options = {}) {
  const query = useQuery(GET_GROUP_MEMBER_STATUSES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    ...query,
    groupMemberStatuses: query?.data?.groupMemberStatuses || [],
    inactiveStatusReasons: query?.data?.inactiveStatusReasons || [],
  };
}

export default useGroupMemberStatuses;
