import { gql, useQuery } from '@apollo/client';

export const FEATURES_FRAGMENT = gql`
  fragment FeaturesFragment on Feature {
    ... on HeroListFeature {
      title
      subtitle
      heroCard {
        id
        title
        action
        relatedNode {
          id
          ... on ContentItem {
            coverImage {
              sources {
                uri
              }
            }
          }
        }
      }
      actions {
        id
        title
        action
        relatedNode {
          id
        }
      }
    }
  }
`;

export const GET_FEED_FEATURES = gql`
  query getFeedFeatures {
    userFeedFeatures {
      ...FeaturesFragment
    }
  }
  ${FEATURES_FRAGMENT}
`;

function useFeedFeatures(options) {
  const query = useQuery(GET_FEED_FEATURES, options);

  return {
    features: query?.data?.userFeedFeatures || [],
    ...query,
  };
}

export default useFeedFeatures;
