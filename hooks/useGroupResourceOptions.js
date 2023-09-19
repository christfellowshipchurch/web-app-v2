import { useQuery, gql } from '@apollo/client';

export const GROUP_RESOURCE_OPTIONS = gql`
  query groupResourceOptions($tagCategory: String!) {
    getTags(tagCategory: $tagCategory)
  }
`;

function useGroupResourceOptions(options = {}) {
  const query = useQuery(GROUP_RESOURCE_OPTIONS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    categories: query?.data?.getTags || [],
    ...query,
  };
}

export default useGroupResourceOptions;
