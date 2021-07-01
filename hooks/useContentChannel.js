import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_CHANNEL = gql`
  query getContentChannel($itemId: ID!) {
    node(id: $itemId) {
      ... on ContentChannel {
        childContentItemsConnection {
          edges {
            node {
              id
              title
              summary
              videos {
                sources {
                  uri
                }
              }
              sharing {
                url
              }
              coverImage {
                sources {
                  uri
                }
              }
              ... on UniversalContentItem {
                navImage {
                  sources {
                    uri
                  }
                }
                featureOnHomePage
                showOnHomePage
                showTitleOverImage
                subtitle
                isFeatured
                linkURL
                linkText
                ctaLinks {
                  title
                  body
                  image {
                    sources {
                      uri
                    }
                  }
                  buttonText
                  buttonLink
                }
              }
            }
          }
        }
      }
    }
  }
`;

function useContentChannel(options = {}) {
  const query = useQuery(GET_CONTENT_CHANNEL, options);

  return {
    content: query?.data?.node?.childContentItemsConnection || [],
    ...query,
  };
}

export default useContentChannel;