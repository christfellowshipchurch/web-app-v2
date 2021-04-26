import { useQuery, gql } from '@apollo/client';

export const GROUP_RESOURCE_OPTIONS = gql`
  query groupResourceOptions($groupId: ID!) {
    groupResourceOptions(groupId: $groupId) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

function useGroupResourceOptions(options = {}) {
  const query = useQuery(GROUP_RESOURCE_OPTIONS, options);

  return {
    groupResourceOptions: query?.data?.groupResourceOptions || [],
    ...query,
  };
}

export default useGroupResourceOptions;
