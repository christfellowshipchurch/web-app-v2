import { gql, useQuery } from '@apollo/client';
import { SOURCES } from 'lib/apolloClient/fragments';

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
                ...Sources
              }
              sharing {
                url
              }
              coverImage {
                ...Sources
              }
              ... on WeekendContentItem {
                seriesImage {
                  ...Sources
                }
                seriesBackgroundImage {
                  ...Sources
                }
              }
              ... on UniversalContentItem {
                navImage {
                  ...Sources
                }
                featureOnHomePage
                showOnHomePage
                showTitleOverImage
                subtitle
                isFeatured
                linkURL
                linkText
                dates
                ctaLinks {
                  title
                  body
                  image {
                    ...Sources
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
  ${SOURCES}
`;

function useContentChannel(options = {}) {
  const query = useQuery(GET_CONTENT_CHANNEL, options);

  return {
    content: query?.data?.node?.childContentItemsConnection || [],
    ...query,
  };
}

export default useContentChannel;
