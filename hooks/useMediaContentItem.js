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
    sharing {
      url
    }
  }
`;

export const GET_MEDIA_CONTENT_ITEM = gql`
  query getMediaContentItem($itemId: ID!) {
    node(id: $itemId) {
      ...WeekendContentItemFragment
    }
  }
  ${WEEKEND_CONTENT_ITEM_FRAGMENT}
`;

function useMediaContentItem(options = {}) {
  const query = useQuery(GET_MEDIA_CONTENT_ITEM, options);

  return {
    item: query?.data?.node,
    ...query,
  };
}

export default useMediaContentItem;
