import { useMutation, gql } from '@apollo/client';

export const REMOVE_GROUP_RESOURCE = gql`
  mutation removeGroupResource($groupId: ID!, $relatedNodeId: ID!) {
    removeGroupResource(relatedNodeId: $relatedNodeId, groupId: $groupId) {
      id
    }
  }
`;

function useRemoveGroupResource(options = {}) {
  return useMutation(REMOVE_GROUP_RESOURCE, options);
}

export default useRemoveGroupResource;
