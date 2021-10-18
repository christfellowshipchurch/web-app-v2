import { gql, useQuery } from '@apollo/client';

import {
  LITE_FEATURES_FRAGMENT,
  ACTION_BAR_FEATURE_FRAGMENT,
  ACTION_LIST_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  THEME_FRAGMENT,
} from 'fragments';

/**
 * 1. On every Feature Feed page, first fetch the ID and then run this query
 *
 * 2. Create a new Endpoint (featureFeed(pathname: String)) which allows us to get a Feature Feed from the URL Pathname of a web page
 * ex:  / ==> Home
 *      /events ==> Events
 *      /dannys-page ==> Page Builder
 */

export const GET_FEATURE_FEED = gql`
  query getFeatureFeed($pathname: String!) {
    featuresFeed(pathname: $pathname) {
      id
      features {
        id
        ...LiteFeaturesFragment
        ...ActionBarFeatureFragment
        ...ActionListFeatureFragment
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
  }
  ${LITE_FEATURES_FRAGMENT}
  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${ACTION_LIST_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${THEME_FRAGMENT}
`;

function useFeatureFeed(options = {}) {
  const query = useQuery(GET_FEATURE_FEED, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    features: query?.data?.featuresFeed?.features || [],
    ...query,
  };
}

export default useFeatureFeed;
