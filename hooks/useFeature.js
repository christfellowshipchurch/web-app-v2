import { gql, useQuery } from '@apollo/client';

import {
  ACTION_BAR_FEATURE_FRAGMENT,
  ACTION_LIST_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  CONTENT_BLOCK_FEATURE_FRAGMENT,
  HERO_LIST_FEATURE_FRAGMENT,
  HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  VERTICAL_CARD_LIST_FEATURE_FRAGMENT,
  THEME_FRAGMENT,
} from 'fragments';

export const GET_FEATURE = gql`
  query getFeature($id: ID!) {
    node(id: $id) {
      ... on VerticalCardListFeature {
        ...VerticalCardListFeatureFragment
      }
      ... on HorizontalCardListFeature {
        ...HorizontalCardListFeatureFragment
      }
      ... on HeroListFeature {
        ...HeroListFeatureFragment
      }
      ... on ContentBlockFeature {
        ...ContentBlockFeatureFragment
      }
      ... on AvatarListFeature {
        ...AvatarListFeatureFragment
      }
      ... on ActionListFeature {
        ...ActionListFeatureFragment
      }
      ... on ActionBarFeature {
        ...ActionBarFeatureFragment
      }
    }
  }

  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${ACTION_LIST_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${CONTENT_BLOCK_FEATURE_FRAGMENT}
  ${HERO_LIST_FEATURE_FRAGMENT}
  ${HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT}
  ${VERTICAL_CARD_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${THEME_FRAGMENT}
`;

function useFeature(options = {}) {
  const query = useQuery(GET_FEATURE, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  const data = { ...query?.data?.node };
  const feature = {
    ...data,
    //temp hide title (Fix H4H - Get There First feature cache)
    title: data?.title === 'Get There First' ? null : data?.title,
  };

  return {
    feature,
    loading: query?.loading && !query?.data,
    error: query?.error?.message,
  };
}

export default useFeature;
