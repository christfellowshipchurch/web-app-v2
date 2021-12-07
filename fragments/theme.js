import gql from 'graphql-tag';

const THEMED_NODE_FRAGMENT = gql`
  fragment ThemedNodeFragment on ThemedNode {
    ... on ThemedNode {
      theme {
        colors {
          primary
          secondary
          screen
          paper
          alert
        }
      }
    }
  }
`;
export {
  THEMED_NODE_FRAGMENT
};
