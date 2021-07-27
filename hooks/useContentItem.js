import { gql, useQuery } from '@apollo/client';

export const GET_CONTENT_ITEM = gql`
  fragment MediaFragment on Media {
    sources { uri }
  }
  query getUniversalContentItem($itemId: ID!) {
    node(id: $itemId) {
      id
      ... on UniversalContentItem {
        seriesImage {
          ...MediaFragment
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
            ...MediaFragment
          }
          buttonText
          buttonLink
        }
        ministry
        sharing {
          url
        }
        coverImage {
          ...MediaFragment
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
                ...MediaFragment
              }
              images {
                ...MediaFragment
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
                    ...MediaFragment
                  }
                  summary
                }
              }
              ... on MediaContentItem {
                videos {
                  ...MediaFragment
                }
              }
            }
          }
        }
      }
    }
  }
`;

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, options);

  return {
    item: query?.data?.node || [],
    ...query,
  };
}

export default useContentItem;
