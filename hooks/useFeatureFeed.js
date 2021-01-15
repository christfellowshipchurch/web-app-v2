import { gql, useQuery } from '@apollo/client';

export const GET_FEATURE_FEED = gql`
  query getFeatureFeed {
    userFeedFeatures {
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
  
  fragment LiteFeaturesFragment on Feature {
    id
    __typename
    ... on VerticalCardListFeature {
      isFeatured
      title
      subtitle
    }
    ... on HorizontalCardListFeature {
      title
      subtitle
    }
    ... on ActionListFeature {
      title
      subtitle
    }
    ... on HeroListFeature {
      title
      subtitle
    }
    ... on PrayerListFeature {
      title
      subtitle
      isCard
    }
    ... on TextFeature {
      body
      sharing {
        message
      }
    }
    ... on ScriptureFeature {
      # The whole fragment is currently included b/c these nodes don't fetch their own content.
      sharing {
        message
      }
      scriptures {
        id
        html
        reference
        copyright
        version
      }
    }
    ... on WebviewFeature {
      # The whole fragment is currently included b/c these nodes don't fetch their own content.
      linkText
      title
      url
    }
  }

  fragment ActionBarFeatureFragment on ActionBarFeature {
    id
    actions {
      title
      icon
      action
      relatedNode {
        ...RelatedFeatureNodeFragment
      }
    }
  }

  fragment AvatarListFeatureFragment on AvatarListFeature {
    id
    order
    people {
      id
      firstName
      lastName
      photo {
        uri
      }
      campus {
        id
        name
      }
    }
    isCard
    primaryAction {
      action
      icon
      theme {
        ...ThemeFragment
      }
      relatedNode {
        ...RelatedFeatureNodeFragment
      }
    }
  }

  fragment ThemeFragment on Theme {
    type
    colors {
      primary
      secondary
      screen
      paper
      alert
    }
  }

  fragment RelatedFeatureNodeFragment on Node {
    id
    ... on Url {
      url
    }
    ... on ContentChannel {
      name
    }
  }
  `;

function useFeatureFeed(options = {}) {
  const query = useQuery(GET_FEATURE_FEED, options);

  return {
    features: query?.data?.userFeedFeatures || [],
    ...query,
  };
}

export default useFeatureFeed;
