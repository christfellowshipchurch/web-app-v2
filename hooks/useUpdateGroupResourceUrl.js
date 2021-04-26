import { useMutation, gql } from '@apollo/client';

export const UPDATE_GROUP_RESOURCE_URL = gql`
  mutation updateGroupResourceUrl(
    $url: String!
    $title: String!
    $groupId: ID!
    $relatedNodeId: ID
  ) {
    updateGroupResourceUrl(
      relatedNodeId: $relatedNodeId
      url: $url
      title: $title
      groupId: $groupId
    ) {
      id
    }
  }
`;

function useUpdateGroupResourceUrl(options = {}) {
  return useMutation(UPDATE_GROUP_RESOURCE_URL, options);
}

export default useUpdateGroupResourceUrl;
