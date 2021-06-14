import { useQuery, gql } from '@apollo/client';

export const GROUP_RESOURCE_OPTIONS = gql`
  query groupResourceOptions(
    $groupId: ID!
    $input: ContentItemsConnectionInput
  ) {
    groupResourceOptions(groupId: $groupId, input: $input) {
      totalCount
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
        }
      }
    }
  }
`;

function useGroupResourceOptions(options = {}) {
  const query = useQuery(GROUP_RESOURCE_OPTIONS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    groupResourceOptions: query?.data?.groupResourceOptions || [],
    ...query,
  };
}

export default useGroupResourceOptions;
