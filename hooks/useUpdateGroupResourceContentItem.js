import { useMutation, gql } from '@apollo/client';

export const UPDATE_GROUP_RESOURCE_CONTENT_ITEM = gql`
  mutation updateGroupResourceContentItem(
    $contentItemId: ID!
    $groupId: ID!
    $relatedNodeId: ID
  ) {
    updateGroupResourceContentItem(
      relatedNodeId: $relatedNodeId
      contentItemId: $contentItemId
      groupId: $groupId
    ) {
      id
    }
  }
`;

function useUpdateGroupResourceContentItem(options) {
  return useMutation(UPDATE_GROUP_RESOURCE_CONTENT_ITEM, options);
}

export default useUpdateGroupResourceContentItem;
