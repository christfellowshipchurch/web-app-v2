import { gql, useQuery } from '@apollo/client';
import {
  LITE_FEATURES_FRAGMENT,
  ACTION_BAR_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  THEME_FRAGMENT,
} from 'fragments';

export const GET_EVENT = gql`
  query getEvent($title: String!) {
    getEventContentByTitle(title: $title) {
      id
      title
      summary
      htmlContent
      coverImage {
        name
        sources {
          uri
        }
      }
      tags
      eventGroupings {
        name
        instances {
          id
          start
          end
        }
      }
      callsToAction {
        call
        action
      }

      featureFeed {
        id
        features {
          id
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
    }
  }

  ${LITE_FEATURES_FRAGMENT}
  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${THEME_FRAGMENT}
`;

function useEvent(options = {}) {
  const query = useQuery(GET_EVENT, options);

  return {
    event: query?.data?.getEventContentByTitle || [],
    ...query,
  };
}

export default useEvent;
