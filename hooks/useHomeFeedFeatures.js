import { gql, useQuery } from '@apollo/client';

export const GET_HOME_FEED_FEATURES = gql`
  query getHomeFeedFeatures {
    homeFeedFeatures {
      ... on FeatureFeed {
        id
        features {
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
    }
  }
`;

function useHomeFeedFeatures(options = {}) {
  const query = useQuery(GET_HOME_FEED_FEATURES, options);

  return {
    features: query?.data?.homeFeedFeatures || [],
    ...query,
  };
}

export default useHomeFeedFeatures;
