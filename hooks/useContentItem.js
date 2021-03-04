import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_ITEM = gql`
  query getContentItem($itemId: ID!) {
    node(id: $itemId) {
      __typename
      ... on ContentItem {
        title
        sharing {
          url
        }
        coverImage {
          sources {
            uri
          }
        }
      }
    }
  }
`;

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, options);

  return {
    item: query?.data?.node || [],
    ...query,
  };
}

export default useContentItem;
