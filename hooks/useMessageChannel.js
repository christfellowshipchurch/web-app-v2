import { gql, useQuery } from '@apollo/client';

export const CONTENT_SERIES_CONTENT_ITEM_FRAGMENT = gql`
  fragment ContentSeriesContentItemFragment on ContentSeriesContentItem {
    id
    title
    childContentItemsConnection(orderBy: { field: DATE, direction: DESC }) {
      edges {
        node {
          id
          title
          sharing {
            url
          }
        }
      }
      pageInfo {
        endCursor
      }
      totalCount
    }
    coverImage {
      sources {
        uri
      }
    }
  }
`;

export const GET_MESSAGE_CHANNEL = gql`
  query getMessageChannel($itemId: ID!) {
    node(id: $itemId) {
      ...ContentSeriesContentItemFragment
    }
  }
  ${CONTENT_SERIES_CONTENT_ITEM_FRAGMENT}
`;

function useMessageChannel(options = {}) {
  const query = useQuery(GET_MESSAGE_CHANNEL, options);

  return {
    channel: query?.data?.node,
    ...query,
  };
}

export default useMessageChannel;
