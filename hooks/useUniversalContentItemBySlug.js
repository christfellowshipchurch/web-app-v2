import { gql, useQuery } from '@apollo/client';
import {
  BASE_CONTENT_ITEM,
  METADATA_FRAGMENT,
  SOURCES,
  WITH_MEDIA,
} from 'lib/apolloClient/fragments';

export const GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG = gql`
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
            ...Sources
          }
          buttonText
          buttonLink
        }
        ministry
        secondaryHTML
        redirectURL
        childContentItemsConnection(first: 100, orderBy: { field: DATE, direction: DESC }) {
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
                    ...Sources
                  }
                  summary
                }
                summaryHTML
              }
              ...WithMedia
            }
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

function useUniversalContentItemBySlug(options = {}) {
  const query = useQuery(GET_UNIVERSAL_CONTENT_ITEM_BY_SLUG, options);

  return {
    content: query?.data?.getContentBySlug || [],
    ...query,
  };
}

export default useUniversalContentItemBySlug;
