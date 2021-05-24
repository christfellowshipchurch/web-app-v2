import { gql, useQuery } from '@apollo/client';

export const CONTENT_CHANNEL_FRAGMENT = gql`
  fragment ContentChannelFragment on ContentChannel {
    id
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
          sharing {
            url
          }
        }
      }
    }
  }
`;

export const GET_MESSAGE_SERIES = gql`
  query getMessageSeries($itemId: ID!) {
    node(id: $itemId) {
      ...ContentChannelFragment
    }
  }
  ${CONTENT_CHANNEL_FRAGMENT}
`;

function useMessageSeries(options = {}) {
  const query = useQuery(GET_MESSAGE_SERIES, options);

  return {
    series: query?.data?.node,
    ...query,
  };
}

export default useMessageSeries;
