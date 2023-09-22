import { gql, useQuery } from '@apollo/client';

export const TAGGED_ITEMS = gql`
  query TaggedItems($tagName: String!) {
    getTaggedItems(tagName: $tagName) {
      __typename
      title
      id
    }
  }
`;

function useGetTaggedItems(options = {}) {
  const query = useQuery(TAGGED_ITEMS, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    taggedItems: query?.data?.getTaggedItems,
    ...query,
  };
}

export default useGetTaggedItems;
