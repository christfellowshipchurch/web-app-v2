import { gql, useQuery } from '@apollo/client';

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
                sources {
                  uri
                }
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
`;

function useMessageSeries(options = {}) {
  const query = useQuery(GET_MESSAGE_SERIES, options);

  return {
    series: query?.data?.node,
    ...query,
  };
}

export default useMessageSeries;
