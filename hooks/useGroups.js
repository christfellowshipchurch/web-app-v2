import { gql, useQuery } from '@apollo/client';

import {
  GROUP_FRAGMENT,
  GROUP_ITEM_FRAGMENT,
} from 'lib/apolloClient/fragments';

export const GET_GROUPS = gql`
  query getCurrentUserGroups {
    currentUser {
      id
      profile {
        id
        groups {
          ... on Group {
            ...GroupFragment
          }
          ... on VolunteerGroup {
            ...GroupItemFragment
          }
        }
      }
    }
  }
  ${GROUP_ITEM_FRAGMENT}
  ${GROUP_FRAGMENT}
`;

function useGroups(options = {}) {
  const query = useQuery(GET_GROUPS, options);

  return {
    groups: query?.data?.currentUser?.profile?.groups || [],
    ...query,
  };
}

export default useGroups;
