import { gql, useQuery } from '@apollo/client';
import { SOURCES } from 'lib/apolloClient/fragments';

export const GET_MESSAGE_SERIES = gql`
  query getMessageSeries($itemId: ID!, $after: String) {
    node(id: $itemId) {
      id
      ... on ContentChannel {
        name
        childContentItemsConnection(after: $after) {
          edges {
            node {
              id
              title
              publishDate
              coverImage {
                ...Sources
              }
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
      }
    }
  }
  ${SOURCES}
`;

function useMessageSeries(options = {}) {
  const query = useQuery(GET_MESSAGE_SERIES, options);

  return {
    series: query?.data?.node,
    ...query,
  };
}

export default useMessageSeries;
