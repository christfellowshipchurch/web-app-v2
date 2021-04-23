import { gql, useMutation } from '@apollo/client';

export const UPDATE_GROUP_COVER_IMAGE = gql`
  mutation updateGroupCoverImage($imageId: String, $groupId: ID!) {
    updateGroupCoverImage(imageId: $imageId, groupId: $groupId) {
      id
    }
  }
`;

function useUpdateGroupCoverImage(options = {}) {
  return useMutation(UPDATE_GROUP_COVER_IMAGE, options);
}

export default useUpdateGroupCoverImage;
