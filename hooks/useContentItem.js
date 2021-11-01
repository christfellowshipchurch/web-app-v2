import { gql, useQuery } from '@apollo/client';
import { SOURCES } from 'lib/apolloClient/fragments';

export const GET_CONTENT_ITEM = gql`
  query getUniversalContentItem($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on UniversalContentItem {
        seriesImage {
          ...Sources
        }
        seriesBackgroundImage {
          ...Sources
        }
        showTitleOverImage
        title
        summary
        subtitle
        htmlContent
        parentChannel {
          id
        }
        ctaLinks {
          title
          body
          image {
            ...Sources
          }
          buttonText
          buttonLink
        }
        ministry
        sharing {
          url
        }
        coverImage {
          ...Sources
        }
        secondaryHTML
        redirectURL
        childContentItemsConnection {
          edges {
            node {
              id
              title
              summary
              coverImage {
                ...Sources
              }
              images {
                ...Sources
              }
              parentChannel {
                id
              }
              sharing {
                url
              }
              ... on UniversalContentItem {
                campus {
                  id
                  name
                }
                linkText
                linkURL
                socialMedia {
                  title
                  image {
                    ...Sources
                  }
                  summary
                }
              }
              ... on MediaContentItem {
                videos {
                  ...Sources
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

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, options);

  return {
    item: query?.data?.node || [],
    ...query,
  };
}

export default useContentItem;
