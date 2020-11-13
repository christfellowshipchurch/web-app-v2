import { gql, useQuery } from '@apollo/client';

export const GET_FEED_FEATURES = gql`
  query getFeedFeatures {
    userFeedFeatures {
      ... on ActionListFeature {
        id
        title
        subtitle
        actions {
          id
          title
          subtitle
          action
          image {
            sources {
              uri
            }
          }
          relatedNode {
            id
          }
        }
      }
    }
  }
`;

function useFeedFeatures(options = {}) {
  const query = useQuery(GET_FEED_FEATURES, options);

  return {
    features: query?.data?.userFeedFeatures || [],
    ...query,
  };
}

export default useFeedFeatures;
