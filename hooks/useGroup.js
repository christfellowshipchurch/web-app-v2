import { gql, useQuery } from '@apollo/client';

export const GROUP_FRAGMENT = gql`
  fragment GroupFragment on Group {
    id
    title
    groupType
    summary
    schedule {
      friendlyScheduleText
    }
    coverImage {
      sources {
        uri
      }
    }
    groupResources {
      title
      url
      contentChannelItem
    }
    dateTime {
      start
      end
    }
  }
`;

export const GET_GROUP = gql`
  query getGroup($itemId: ID!) {
    node(id: $itemId) {
      __typename
      ... on Group {
        ...GroupFragment
      }
    }
  }
  ${GROUP_FRAGMENT}
`;

function useGroup(options) {
  const query = useQuery(GET_GROUP, options);

  return {
    group: query?.data?.node || [],
    ...query,
  };
}

export default useGroup;
