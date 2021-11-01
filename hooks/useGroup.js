import { gql, useQuery } from '@apollo/client';
import {
  GROUP_FRAGMENT,
  GROUP_ITEM_FRAGMENT,
} from 'lib/apolloClient/fragments';

export const GET_GROUP = gql`
  query getGroup($itemId: ID!) {
    node(id: $itemId) {
      ... on Group {
        ...GroupFragment
      }
      ... on VolunteerGroup {
        ...GroupItemFragment
      }
    }
  }
  ${GROUP_ITEM_FRAGMENT}
  ${GROUP_FRAGMENT}
`;

function useGroup(options = {}) {
  const query = useQuery(GET_GROUP, options);

  return {
    group: query?.data?.node || [],
    ...query,
  };
}

export default useGroup;
