import { gql, useQuery } from '@apollo/client';

export const GET_MESSAGE_SERIES = gql`
  query getMediaContentItem($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on ContentChannel {
        childContentItemsConnection {
          edges {
            node {
              id
              title
              ... on UniversalContentItem {
                childContentItemsConnection {
                  edges {
                    node {
                      id
                      title
                    }
                  }
                }
                subtitle
                isFeatured
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
