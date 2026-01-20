import { gql, useQuery } from '@apollo/client';
import clone from 'lodash/clone';

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

const customGiveContentBlockCollection = {
  __typename: 'ContentBlockCollectionFeature',
  title: "What You're Giving To:",
  cards: [
    {
      title: 'Everyone',
      summary:
        'What started as 40 people in a living room is now thousands gathering across the region and online through Christ Fellowship Everywhere. When you faithfully give toward tithes & offerings, you’re a part of reaching even more people with the love and message of Jesus Christ.',
      coverImage: { sources: [{ uri: '/give/give1.png' }] },
      highlightWidth: '100%',
      highlightWidthSmall: '10%',
    },
    {
      title: 'Everyday',
      summary:
        'Our vision is to lead a radical transformation in our region and beyond. Your faithful giving throughout the year is what equips us to do just that through the ongoing operations of the church—including our ministries, buildings, and platform of digital resources.',
      coverImage: { sources: [{ uri: '/give/give2.png' }] },
      highlightWidth: '100%',
      highlightWidthSmall: '10%',
    },
    {
      title: 'Everywhere',
      summary:
        'Through our regional and global missions partners, we’re positioned to meet needs as soon as they arise. Whether through regular tithes & offerings or through Christ Birthday Offering in December, every dollar you give makes a difference for those in need.',
      coverImage: { sources: [{ uri: '/give/give3.png' }] },
      highlightWidth: '100%',
      highlightWidthSmall: '10%',
    },
  ],
};

function useFeatureFeed(options = {}) {
  const query = useQuery(GET_FEATURE_FEED, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  const isGivePage = options?.variables?.pathname === 'give';
  let features = Array.isArray(query?.data?.featuresFeed?.features)
    ? clone(query?.data?.featuresFeed?.features)
    : [];

  if (isGivePage && features.length > 2) {
    features[2] = customGiveContentBlockCollection;
  }

  return {
    features: features,
    ...query,
  };
}

export default useFeatureFeed;
