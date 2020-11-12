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
    label
    callsToAction {
      call
      action
    }
    hideLabel
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
  query getContentItem($itemId: ID!) {
    node(id: $itemId) {
      __typename
      ... on ContentItem {
        ...contentItemFragment
        ...eventContentItemFragment
        ...informationalContentItemFragment
        ...publishFragment
      }
    }
    metadata(relatedNode: $itemId) {
      name
      content
    }
  }
  ${CONTENT_ITEM_FRAGMENT}
  ${EVENT_ITEM_FRAGMENT}
  ${PUBLISH_FRAGMENT}
  ${INFORMATIONAL_ITEM_FRAGMENT}
`;

function useContentItem(options) {
  const query = useQuery(GET_CONTENT_ITEM, options);

  return {
    item: query?.data?.node || [],
    ...query,
  };
}

export default useContentItem;
