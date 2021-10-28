import { gql, useQuery } from '@apollo/client';

import {
  ACTION_BAR_FEATURE_FRAGMENT,
  ACTION_LIST_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  CONTENT_BLOCK_FEATURE_FRAGMENT,
  FEATURE_FEED_FRAGMENT,
  HERO_LIST_FEATURE_FRAGMENT,
  HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  THEME_FRAGMENT,
  VERTICAL_CARD_LIST_FEATURE_FRAGMENT,
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
      ...FeatureFeedFragment
    }
  }
  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${ACTION_LIST_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${CONTENT_BLOCK_FEATURE_FRAGMENT}
  ${FEATURE_FEED_FRAGMENT}
  ${HERO_LIST_FEATURE_FRAGMENT}
  ${HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${THEME_FRAGMENT}
  ${VERTICAL_CARD_LIST_FEATURE_FRAGMENT}
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
