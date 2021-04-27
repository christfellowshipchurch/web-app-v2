import { gql, useQuery } from '@apollo/client';

import {
  EVENT_ITEM_FRAGMENT,
  CONTENT_ITEM_FRAGMENT,
  PUBLISH_FRAGMENT,
  INFORMATIONAL_ITEM_FRAGMENT,
} from './useContentItem';

export const GET_NODE = gql`
  query getNode($id: ID!) {
    node(id: $id) {
      id
      __typename
      ... on ContentItem {
        ...contentItemFragment
        ...eventContentItemFragment
        ...informationalContentItemFragment
        ...publishFragment
      }

      ... on FeaturesNode {
        featureFeed {
          id
          features {
            id
          }
        }
      }
    }
  }

  ${EVENT_ITEM_FRAGMENT}
  ${CONTENT_ITEM_FRAGMENT}
  ${PUBLISH_FRAGMENT}
  ${INFORMATIONAL_ITEM_FRAGMENT}
`;

function useNode(options = {}) {
  const query = useQuery(GET_NODE, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    item: query?.data?.node || {},
    ...query,
  };
}

export default useNode;
