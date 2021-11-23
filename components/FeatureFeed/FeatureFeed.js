import React from 'react';
import PropTypes from 'prop-types';

import ActionBarFeature from '../ActionBarFeature';
import ActionListFeature from '../ActionListFeature';
import AvatarListFeature from '../AvatarListFeature';
import ContentBlockFeature from '../ContentBlockFeature';
import ContentBlockCollection from '../ContentBlockCollection';
import HeroListFeature from '../HeroListFeature';
import HorizontalCardListFeature from '../HorizontalCardListFeature';
import VerticalCardListFeature from '../VerticalCardListFeature';
import { Box } from 'ui-kit';
import { getComponent } from 'utils';

const FEATURE_COMPONENTS = {
  ActionBarFeature,
  ActionListFeature,
  AvatarListFeature,
  ContentBlockFeature,
  HeroListFeature,
  HorizontalCardListFeature,
  HtmlBlockFeature: ContentBlockFeature,
  VerticalCardListFeature,
  ContentBlockCollectionFeature: ContentBlockCollection,

  // TODO: Implement all Features needed for web
  // PrayerListFeature: () => null,
  // VerticalPrayerListFeature: () => null,
  // CommentListFeature: () => null,
  // AddCommentFeature: () => null,
  // ScriptureFeature: () => null,
  // TextFeature: () => null,
  // WebviewFeature: () => null,
};

const onPressActionItem = (event, { action, relatedNode }) => {
  /**
   * note : if an action should do anything outside of linking using `<a>`, break the default and handle your logic here
   *
   * event.preventDefault();
   */
  switch (action) {
    case 'READ_CONTENT':
    case 'READ_EVENT':
    case 'OPEN_NODE':
    case 'OPEN_URL':
      return relatedNode?.url;
    case 'OPEN_AUTHENTICATED_URL':
    case 'OPEN_CHANNEL':
    default:
      break;
  }
};

// This component is created to map the features by type and send them.
const FeatureFeed = (props = {}) => {
  const error = props?.error?.toString();

  if (error && error === 'Error: Must be logged in') {
    return <Box as="h1">Please Log In to View Page</Box>;
  }

  return props.data?.map((edge, i) => {
    const Component = getComponent(edge, {
      ...FEATURE_COMPONENTS,
      ...props?.additionalFeatures,
    });
    return (
      <Box key={edge?.id} my="xl">
        <Component data={edge} onPressActionItem={props?.onPressActionItem} />
      </Box>
    );
  });
};

FeatureFeed.propTypes = {
  additionalFeatures: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
  onPressActionItem: PropTypes.func,
};

FeatureFeed.defaultProps = {
  additionalFeatures: {},
  onPressActionItem: onPressActionItem,
};

export default FeatureFeed;
