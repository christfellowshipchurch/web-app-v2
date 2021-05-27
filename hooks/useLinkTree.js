import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const GET_LINK_TREE = gql`
  query getLinkTree {
    linkTree {
      title
      action
      relatedNode {
        id
        ... on Url {
          url
        }
      }
    }
  }
`;

const useLinkTree = options => {
  const query = useQuery(GET_LINK_TREE, {
    fetchPolicy: 'network-only',
    ...options,
  });

  return query;
};

export default useLinkTree;
