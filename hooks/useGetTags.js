import { useQuery, gql } from '@apollo/client';

export const GET_TAGS = gql`
  query getTags($tagCategory: String!) {
    getTags(tagCategory: $tagCategory) {
      name
      description
    }
  }
`;

function useGetTags(options = {}) {
  const query = useQuery(GET_TAGS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    categories: query?.data?.getTags || [],
    ...query,
  };
}

export default useGetTags;
