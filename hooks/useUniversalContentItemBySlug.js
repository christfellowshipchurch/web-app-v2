import { gql, useQuery } from '@apollo/client';
import METADATA_FRAGMENT from './useMetadataFragment';

export const GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG = gql`
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
      sources {
        uri
      }
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
  fragment WithMedia on ContentItem {
    videos {
      sources {
        uri
      }
    }
  }
  query getWebpageContentBySlug($slug: String!) {
    getContentBySlug(slug: $slug) {
      ...BaseContentItem
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
        childContentItemsConnection(orderBy: { field: DATE, direction: DESC }) {
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

function useUniversalContentItemBySlug(options = {}) {
  const query = useQuery(GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG, options);

  return {
    content: query?.data?.getContentBySlug || [],
    ...query,
  };
}

export default useUniversalContentItemBySlug;
