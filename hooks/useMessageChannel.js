import { gql, useQuery } from '@apollo/client';
import { SOURCES } from 'lib/apolloClient/fragments';

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
              publishDate
              ... on WeekendContentItem {
                coverImage {
                  ...Sources
                }
                seriesImage {
                  ...Sources
                }
                seriesBackgroundImage {
                  ...Sources
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
          ...Sources
        }
        backgroundImage {
          ...Sources
        }
      }
    }
  }
  ${SOURCES}
`;

function useMessageChannel(options = {}) {
  const query = useQuery(GET_MESSAGE_CHANNEL, options);

  return {
    channel: query?.data?.node,
    ...query,
  };
}

export default useMessageChannel;
