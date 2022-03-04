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
  THEMED_NODE_FRAGMENT
} from 'fragments';

export const CONTENT_ITEM_FRAGMENT = gql`
  fragment contentItemFragment on ContentItem {
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
    theme {
      type
      colors {
        primary
        secondary
        screen
        paper
      }
    }
    parentChannel {
      id
      name
    }
    videos {
      key
      name
      sources {
        uri
      }
    }
    audios {
      sources {
        uri
      }
    }
  }
`;

export const EVENT_ITEM_FRAGMENT = gql`
  fragment eventContentItemFragment on EventContentItem {
    eventGroupings {
      name
      instances {
        id
        start
        end
      }
    }
    labelText
    callsToAction {
      call
      action
    }
  }
`;

export const PUBLISH_FRAGMENT = gql`
  fragment publishFragment on ContentItem {
    ... on ContentSeriesContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
    ... on UniversalContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
    ... on DevotionalContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
    ... on MediaContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
  }
`;

export const INFORMATIONAL_ITEM_FRAGMENT = gql`
  fragment informationalContentItemFragment on InformationalContentItem {
    callsToAction {
      call
      action
    }
  }
`;

export const GET_CONTENT_ITEM = gql`
  query getContentItem($pathname: String) {
    getNodeByPathname(pathname: $pathname) {
      id
      __typename
      ... on ContentItem {
        ...contentItemFragment
        ...eventContentItemFragment
        ...informationalContentItemFragment
        ...publishFragment
      }

      ... on FeaturesNode {
        featureFeed {
          ...FeatureFeedFragment
        }
      }

      ...ThemedNodeFragment

      ... on NodeRoute {
        routing {
          pathname
        }
      }
    }
  }

  ${EVENT_ITEM_FRAGMENT}
  ${CONTENT_ITEM_FRAGMENT}
  ${PUBLISH_FRAGMENT}
  ${INFORMATIONAL_ITEM_FRAGMENT}

  ${ACTION_BAR_FEATURE_FRAGMENT}
  ${ACTION_LIST_FEATURE_FRAGMENT}
  ${AVATAR_LIST_FEATURE_FRAGMENT}
  ${CONTENT_BLOCK_FEATURE_FRAGMENT}
  ${FEATURE_FEED_FRAGMENT}
  ${HERO_LIST_FEATURE_FRAGMENT}
  ${HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
  ${THEME_FRAGMENT}
  ${THEMED_NODE_FRAGMENT}
  ${VERTICAL_CARD_LIST_FEATURE_FRAGMENT}
`;

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });
  const item = query?.data?.getNodeByPathname || null

  return {
    item,
    ...query,
    loading: query?.loading && !item
  };
}

export default useContentItem;
