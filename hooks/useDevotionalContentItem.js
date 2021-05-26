import { gql, useQuery } from '@apollo/client';

export const DEVOTIONAL_CONTENT_ITEM_FRAGMENT = gql`
  fragment DevotionalContentItemFragment on DevotionalContentItem {
    id
    title
    summary
    htmlContent
    scriptures {
      html
      book
      version
      reference
      copyright
    }
    parentChannel {
      id
    }
    sharing {
      url
    }
    coverImage {
      sources {
        uri
      }
    }
  }
`;

export const GET_DEVOTIONAL_CONTENT_ITEM = gql`
  query getDevotionalContentItem($itemId: ID!) {
    node(id: $itemId) {
      ...DevotionalContentItemFragment
    }
  }
  ${DEVOTIONAL_CONTENT_ITEM_FRAGMENT}
`;

function useDevotionalContentItem(options = {}) {
  const query = useQuery(GET_DEVOTIONAL_CONTENT_ITEM, options);

  return {
    item: query?.data?.node || [],
    ...query,
  };
}

export default useDevotionalContentItem;
