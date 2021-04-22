import { gql, useQuery } from '@apollo/client';

import {
  ACTION_BAR_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  CONTENT_BLOCK_FEATURE_FRAGMENT,
  HERO_LIST_FEATURE_FRAGMENT,
  HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT,
  THEME_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  VERTICAL_CARD_LIST_FEATURE_FRAGMENT,
} from '../fragments';

export const GET_FEATURE = gql`
  query getFeature($featureId: ID!) {
    node(id: $featureId) {
      id
      __typename

      ...ActionBarFeatureFragment
      ...AvatarListFeatureFragment
      ...ContentBlockFeatureFragment
      ...HeroListFeatureFragment
      ...HorizontalCardListFeatureFragment
      ...VerticalCardListFeatureFragment

      ... on HtmlBlockFeature {
        id
        htmlContent
      }
    }
  }
  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${CONTENT_BLOCK_FEATURE_FRAGMENT}
  ${HERO_LIST_FEATURE_FRAGMENT}
  ${HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT}
  ${THEME_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${VERTICAL_CARD_LIST_FEATURE_FRAGMENT}
`;

function useFeature(options = {}) {
  const query = useQuery(GET_FEATURE, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  console.log({ query });

  return {
    feature: query?.data?.node || [],
    ...query,
  };
}

export default useFeature;
