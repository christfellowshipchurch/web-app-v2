import { gql, useQuery } from '@apollo/client';

export const GET_GROUP_COVER_IMAGES = gql`
  query groupCoverImages {
    groupCoverImages {
      guid
      name
      image {
        sources {
          uri
        }
      }
    }
  }
`;

function useGroupCoverImages(options = {}) {
  const query = useQuery(GET_GROUP_COVER_IMAGES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    coverImages: query?.data?.groupCoverImages || [],
    ...query,
  };
}

export default useGroupCoverImages;
