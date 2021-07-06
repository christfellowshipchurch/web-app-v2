import { gql, useQuery } from '@apollo/client';

export const GET_MESSAGE_CHANNEL = gql`
  query getMessageChannel($itemId: ID!, $after: String) {
    node(id: $itemId) {
      id
      ... on ContentSeriesContentItem {
        title
        parentChannel {
          id
        }
        sharing {
          url
        }
        childContentItemsConnection(
          orderBy: { field: DATE, direction: ASC }
          after: $after
        ) {
          edges {
            node {
              id
              title
              sharing {
                url
              }
              ... on WeekendContentItem {
                coverImage {
                  sources {
                    uri
                  }
                }
                seriesImage {
                  sources {
                    uri
                  }
                }
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
    }
  }
`;

function useMessageChannel(options = {}) {
  const query = useQuery(GET_MESSAGE_CHANNEL, options);

  return {
    channel: query?.data?.node,
    ...query,
  };
}

export default useMessageChannel;
