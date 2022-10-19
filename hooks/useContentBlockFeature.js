import { gql, useQuery } from '@apollo/client';
import {
  CONTENT_BLOCK_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
} from 'fragments';

export const GET_CONTENT_BLOCK = gql`
  query getContentBlock($id: ID!) {
    node(id: $id) {
      ... on ContentBlockFeature {
        ...ContentBlockFeatureFragment
      }
    }
  }

  ${CONTENT_BLOCK_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
`;

function getContentBlock(options = {}) {
  const query = useQuery(GET_CONTENT_BLOCK, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    block: query?.data?.node || {},
    ...query,
  };
}

export default getContentBlock;
