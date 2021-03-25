import { gql, useQuery } from '@apollo/client';

export const GET_MESSAGE_SERIES = gql`
  query getMessageSeries($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on ContentChannel {
        name
        childContentItemsConnection {
          edges {
            node {
              id
              title
              coverImage {
                sources {
                  uri
                }
              }
            }
          }
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
