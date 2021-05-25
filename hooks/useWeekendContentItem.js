import { gql, useQuery } from '@apollo/client';

export const WEEKEND_CONTENT_ITEM_FRAGMENT = gql`
  fragment WeekendContentItemFragment on WeekendContentItem {
    id
    title
    summary
    coverImage {
      sources {
        uri
      }
    }
    videos {
      sources {
        uri
      }
    }
    htmlContent
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
    sharing {
      url
    }
  }
`;

export const GET_WEEKEND_CONTENT_ITEM = gql`
  query getWeekendContentItem($itemId: ID!) {
    node(id: $itemId) {
      ...WeekendContentItemFragment
    }
  }
  ${WEEKEND_CONTENT_ITEM_FRAGMENT}
`;

function useWeekendContentItem(options = {}) {
  const query = useQuery(GET_WEEKEND_CONTENT_ITEM, options);

  return {
    item: query?.data?.node,
    ...query,
  };
}

export default useWeekendContentItem;
