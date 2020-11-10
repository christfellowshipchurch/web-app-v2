import { gql, useQuery } from '@apollo/client';

import { GROUP_FRAGMENT } from './useGroup';

export const GET_GROUPS = gql`
  query getCurrentUserGroups {
    currentUser {
      id
      profile {
        id
        groups {
          ... on Group {
            ...groupFragment
          }
        }
      }
    }
  }
  ${GROUP_FRAGMENT}
`;

function useEvent(options) {
  const query = useQuery(GET_GROUPS, options);
  console.log(query);

  return {
    groups: query?.data?.currentUser?.profile?.groups || [],
    ...query,
  };
}

export default useEvent;
