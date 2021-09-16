import { gql, useQuery } from '@apollo/client';
import get from 'lodash/get';

export const GET_GROUP_MEMBER_STATUSES = gql`
  query groupMemberStatuses {
    groupMemberStatuses {
      id
      label
    }

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
    groupMemberStatuses: get(query, 'data.groupMemberStatuses', []),
    inactiveStatusReasons: get(query, 'data.inactiveStatusReasons', []),
  };
}

export default useGroupMemberStatuses;
