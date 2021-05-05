import React from 'react';
import PropTypes from 'prop-types';

import ActionBarFeature from '../ActionBarFeature';
import AvatarListFeature from '../AvatarListFeature';
import ContentBlockFeature from '../ContentBlockFeature';
import HeroListFeature from '../HeroListFeature';
import HorizontalCardListFeature from '../HorizontalCardListFeature';
import VerticalCardListFeature from '../VerticalCardListFeature';
import { FeatureProvider } from 'providers';
import { Box, Divider } from 'ui-kit';
import { getComponent, htmlToReactParser } from 'utils';

const FEATURE_COMPONENTS = {
  ActionBarFeature,
  AvatarListFeature,
  ContentBlockFeature,
  HeroListFeature,
  HorizontalCardListFeature,
  HtmlBlockFeature: ContentBlockFeature,
  VerticalCardListFeature,

  // TODO: Implement all Features needed for web
  // ActionListFeature: () => null,
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
    case 'OPEN_AUTHENTICATED_URL':
    case 'OPEN_CHANNEL':
    default:
      break;
  }
};

// This component is created to map the features by type and send them.
const FeatureFeed = (props = {}) => {
  const isLastItem = i => i < props.data.length - 1;

  const error = props?.error?.toString();

  if (error && error === 'Error: Must be logged in') {
    return <Box as="h1">Please Log In to View Page</Box>;
  }

  return props.data?.map((edge, i) => (
    <Box key={edge?.id} py="l">
      <FeatureProvider
        onPressActionItem={props?.onPressActionItem}
        Component={getComponent(edge, {
          ...FEATURE_COMPONENTS,
          ...props?.additionalFeatures,
        })}
        options={{
          variables: {
            featureId: edge?.id,
          },
        }}
      />
    </Box>
  ));
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
