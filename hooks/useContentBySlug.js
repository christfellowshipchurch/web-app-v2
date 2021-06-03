import { gql, useQuery } from '@apollo/client';
import METADATA_FRAGMENT from './useMetadataFragment';

export const GET_CONTENT_BY_SLUG = gql`
  fragment BaseContentItem on ContentItem {
    id
    title
    summary
    htmlContent
    parentChannel {
      id
    }
    coverImage {
      sources {
        uri
      }
    }
    sharing {
      url
    }
  }
  fragment WithMedia on ContentItem {
    videos {
      sources {
        uri
      }
    }
  }
  query getContentBySlug($slug: String!) {
    getContentBySlug(slug: $slug) {
      ...BaseContentItem
      ... on WeekendContentItem {
        ...WithMedia
        audios {
          sources {
            uri
          }
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
          sources {
            uri
          }
        }
        ...WithMedia
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
              id
              title
              sharing {
                url
              }
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
            sources {
              uri
            }
          }
          buttonText
          buttonLink
        }
        ministry
        secondaryHTML
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
                socialMedia {
                  title
                  image {
                    sources {
                      uri
                    }
                  }
                  summary
                }
              }
              ...WithMedia
            }
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
