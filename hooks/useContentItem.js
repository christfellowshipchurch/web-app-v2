import { gql, useQuery } from '@apollo/client';

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
    events {
      start
      end
      campuses {
        name
      }
      location
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
          id
          features {
            id
          }
        }
      }
    }
  }

  ${EVENT_ITEM_FRAGMENT}
  ${CONTENT_ITEM_FRAGMENT}
  ${PUBLISH_FRAGMENT}
  ${INFORMATIONAL_ITEM_FRAGMENT}
`;

function useContentItem(options = {}) {
  const query = useQuery(GET_CONTENT_ITEM, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    item: query?.data?.getNodeByPathname || [],
    ...query,
  };
}

export default useContentItem;
