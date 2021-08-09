import { gql, useQuery } from '@apollo/client';
import METADATA_FRAGMENT from './useMetadataFragment';

export const GET_CONTENT_BY_SLUG = gql`
  fragment BaseContentItem on ContentItem {
    id
    title
    summary
    htmlContent
    publishDate
    parentChannel {
      id
    }
    coverImage {
      ...Sources
    }
    sharing {
      url
    }
    siblingContentItemsConnection {
      edges {
        node {
          id
          title
          summary
          publishDate
          coverImage {
            ...Sources
          }
          sharing {
            url
          }
        }
      }
    }
  }
  fragment Sources on Media { sources { uri }}
  fragment WithMedia on ContentItem {
    videos {
      ...Sources
    }
  }
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
`;

function useContentBySlug(options = {}) {
  const query = useQuery(GET_CONTENT_BY_SLUG, options);

  return {
    content: query?.data?.getContentBySlug || [],
    ...query,
  };
}

export default useContentBySlug;
