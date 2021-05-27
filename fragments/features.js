import gql from 'graphql-tag';

const LITE_FEATURES_FRAGMENT = gql`
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
`;

const ACTION_BAR_FEATURE_FRAGMENT = gql`
  fragment ActionBarFeatureFragment on ActionBarFeature {
    id
    order

    actions {
      title
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
`;

const AVATAR_LIST_FEATURE_FRAGMENT = gql`
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
`;

const CONTENT_BLOCK_FEATURE_FRAGMENT = gql`
  fragment ContentBlockFeatureFragment on ContentBlockFeature {
    title
    subtitle
    htmlContent
    coverImage {
      sources {
        uri
      }
    }
    actions {
      title
      action
      relatedNode {
        ...RelatedFeatureNodeFragment
      }
    }
    orientation
    imageRatio
    imageAlt
    videos {
      name
      key
      sources {
        uri
      }
    }
  }
`;

const HERO_LIST_FEATURE_FRAGMENT = gql`
  fragment HeroListFeatureFragment on HeroListFeature {
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
        ...RelatedFeatureNodeFragment
      }
    }
    primaryAction {
      title
      action
      relatedNode {
        ...RelatedFeatureNodeFragment
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
        ...RelatedFeatureNodeFragment
      }
    }
  }
`;

const HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT = gql`
  fragment HorizontalCardListFeatureFragment on HorizontalCardListFeature {
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
        ...RelatedFeatureNodeFragment
      }
    }
    cardType
    primaryAction {
      title
      action
      relatedNode {
        ...RelatedFeatureNodeFragment
      }
    }
  }
`;

const THEME_FRAGMENT = gql`
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
`;

const RELATED_FEATURE_NODE_FRAGMENT = gql`
  fragment RelatedFeatureNodeFragment on Node {
    id
    ... on Url {
      url
    }
    ... on ContentChannel {
      name
    }
    ... on NodeRoute {
      routing {
        pathname
      }
    }
  }
`;

const VERTICAL_CARD_LIST_FEATURE_FRAGMENT = gql`
  fragment VerticalCardListFeatureFragment on VerticalCardListFeature {
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
        ...RelatedFeatureNodeFragment
      }
    }
  }
`;

export {
  ACTION_BAR_FEATURE_FRAGMENT,
  AVATAR_LIST_FEATURE_FRAGMENT,
  CONTENT_BLOCK_FEATURE_FRAGMENT,
  HERO_LIST_FEATURE_FRAGMENT,
  HORIZONTAL_CARD_LIST_FEATURE_FRAGMENT,
  LITE_FEATURES_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
  THEME_FRAGMENT,
  VERTICAL_CARD_LIST_FEATURE_FRAGMENT,
};
