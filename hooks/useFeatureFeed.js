import { gql, useQuery } from '@apollo/client';

import {
  LITE_FEATURES_FRAGMENT,
  ACTION_BAR_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  THEME_FRAGMENT,
} from 'fragments';

export const GET_FEATURE_FEED = gql`
  query getFeatureFeed {
    userFeedFeatures {
      ...LiteFeaturesFragment
      ...ActionBarFeatureFragment
      ...AvatarListFeatureFragment
      ... on HorizontalCardListFeature {
        cardType
        primaryAction {
          title
          action
          relatedNode {
            ...RelatedFeatureNodeFragment
          }
        }
      }
    }
  }
  ${LITE_FEATURES_FRAGMENT}
  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${THEME_FRAGMENT}
`;

function useFeatureFeed(options = {}) {
  const query = useQuery(GET_FEATURE_FEED, options);

  return {
    features: query?.data?.userFeedFeatures || [],
    ...query,
  };
}

export default useFeatureFeed;
