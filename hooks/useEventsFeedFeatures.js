import { gql, useQuery } from '@apollo/client';
import {
  LITE_FEATURES_FRAGMENT,
  ACTION_BAR_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  THEME_FRAGMENT,
} from 'fragments';

export const GET_EVENTS_FEED_FEATURES = gql`
  query getEventsFeedFeatures {
    eventsFeedFeatures {
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

function useEventsFeedFeatures(options = {}) {
  const query = useQuery(GET_EVENTS_FEED_FEATURES, options);

  return {
    eventsFeatures: query?.data?.eventsFeedFeatures || [],
    ...query,
  };
}

export default useEventsFeedFeatures;
