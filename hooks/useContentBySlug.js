import { gql, useQuery } from '@apollo/client';
import {
  BASE_CONTENT_ITEM,
  METADATA_FRAGMENT,
  SOURCES,
  WITH_MEDIA,
} from 'lib/apolloClient/fragments';

export const GET_CONTENT_BY_SLUG = gql`
  query getContentBySlug($slug: String!) {
    getContentBySlug(slug: $slug) {
      ...BaseContentItem
      ... on WeekendContentItem {
        ...WithMedia
        audios {
          ...Sources
        }
        seriesImage {
          ...Sources
        }
        seriesBackgroundImage {
          ...Sources
        }
        childContentItemsConnection {
          edges {
            node {
              ...WithMedia
            }
          }
        }
      }
      ... on MediaContentItem {
        audios {
          ...Sources
        }
        ...WithMedia
        seriesImage {
          ...Sources
        }
        seriesBackgroundImage {
          ...Sources
        }
        childContentItemsConnection {
          edges {
            node {
              ...WithMedia
            }
          }
        }
      }
      ... on DevotionalContentItem {
        scriptures {
          html
          book
          version
          reference
          copyright
        }
      }
      ... on ContentSeriesContentItem {
        backgroundImage {
          ...Sources
        }
        childContentItemsConnection(orderBy: { field: DATE, direction: DESC }) {
          edges {
            node {
              ...BaseContentItem
            }
          }
          pageInfo {
            endCursor
          }
          totalCount
        }
      }
      ... on UniversalContentItem {
        ...MetadataFragment
        subtitle
        showTitleOverImage
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
        secondaryHTML
        redirectURL
        dates
        childContentItemsConnection {
          edges {
            node {
              ...BaseContentItem
              ... on UniversalContentItem {
                campus {
                  id
                  name
                }
                linkText
                linkURL
              }
            }
          }
        }
        socialMedia {
          title
          summary
          image {
            ...Sources
          }
        }
      }
    }
  }
  ${METADATA_FRAGMENT}
  ${BASE_CONTENT_ITEM}
  ${SOURCES}
  ${WITH_MEDIA}
`;

function useContentBySlug(options = {}) {
  const query = useQuery(GET_CONTENT_BY_SLUG, options);

  return {
    content: query?.data?.getContentBySlug || [],
    ...query,
  };
}

export default useContentBySlug;
