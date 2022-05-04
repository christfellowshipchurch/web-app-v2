import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const GET_LINK_TREE = gql`
  query getLinkTree($pathname: String!) {
    linkTree(pathname: $pathname) {
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

  console.log({ query });

  return query;
};

export default useLinkTree;
