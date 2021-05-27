import { gql, useQuery } from '@apollo/client';
import { MEDIA_CONTENT_ITEM_FRAGMENT } from './useMediaContentItem';
import { WEEKEND_CONTENT_ITEM_FRAGMENT } from './useWeekendContentItem';

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
  fragment WithMedia on MediaContentItem {
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
        videos {
          sources {
            uri
          }
        }
        childContentItemsConnection {
          edges {
            node {
              id
              ... on ContentItem {
                videos {
                  sources {
                    uri
                  }
                }
              }
            }
          }
        }
      }
      ... on MediaContentItem {
        ...WithMedia
        audios {
          sources {
            uri
          }
        }
        childContentItemsConnection {
          edges {
            node {
              id
              ... on ContentItem {
                videos {
                  sources {
                    uri
                  }
                }
              }
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
`;

function useContentBySlug(options = {}) {
  const query = useQuery(GET_CONTENT_BY_SLUG, options);

  return {
    content: query?.data?.getContentBySlug || [],
    ...query,
  };
}

export default useContentBySlug;
