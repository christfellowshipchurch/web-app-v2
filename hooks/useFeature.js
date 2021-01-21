import { gql, useQuery } from '@apollo/client';

export const GET_FEATURE = gql`
query getFeature($featureId: ID!) {
  node(id: $featureId) {
    id
    __typename
    ... on VerticalCardListFeature {
      id
      isFeatured
      title
      subtitle
      cards {
        id
        action
        title
        hasAction
        actionIcon
        labelText
        summary
        coverImage {
          sources {
            uri
          }
        }
        relatedNode {
          id
          ... on Url {
            url
          }
          ... on ContentChannel {
            name
          }
        }
      }
    }
    ... on HeroListFeature {
      id
      title
      subtitle
      actions {
        id
        title
        subtitle
        action
        image {
          sources {
            uri
          }
        }
        relatedNode {
          id
          ... on Url {
            url
          }
          ... on ContentChannel {
            name
          }
        }
      }
      primaryAction {
        title
        action
        relatedNode {
          id
          ... on Url {
            url
          }
          ... on ContentChannel {
            name
          }
        }
      }
      heroCard {
        action
        title
        hasAction
        actionIcon
        labelText
        summary
        coverImage {
          sources {
            uri
          }
        }
        relatedNode {
          id
          ... on Url {
            url
          }
          ... on ContentChannel {
            name
          }
        }
      }
    }
    ... on HorizontalCardListFeature {
      id
      title
      subtitle
      cards {
        action
        title
        hyphenatedTitle: title(hyphenated: true)
        hasAction
        actionIcon
        labelText
        summary
        coverImage {
          sources {
            uri
          }
        }
        relatedNode {
          id
          ... on Url {
            url
          }
          ... on ContentChannel {
            name
          }
        }
      }
      cardType
      primaryAction {
        title
        action
        relatedNode {
          id
          ... on Url {
            url
          }
          ... on ContentChannel {
            name
          }
        }
      }
    }
  }
}
`;

function useFeature(options = {}) {
  const query = useQuery(GET_FEATURE, options);

  return {
    feature: query?.data?.node || [],
    ...query,
  };
}

export default useFeature;
