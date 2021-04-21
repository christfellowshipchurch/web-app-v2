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

// This component is created to map the features by type and send them.
const FeatureFeed = (props = {}) => {
  const isLastItem = i => i < props.data.length - 1;

  const error = props?.error?.toString();

  if (error && error === 'Error: Must be logged in') {
    return <Box as="h1">Please Log In to View Page</Box>;
  }

  return props.data?.map((edge, i) => (
    <Box key={edge?.id} pb="xl">
      <Box as="h2" pb="base">
        {edge.title}
      </Box>
      <FeatureProvider
        Component={getComponent(edge, FEATURE_COMPONENTS)}
        options={{
          variables: {
            featureId: edge?.id,
          },
        }}
      />
      {/* {isLastItem(i) && <Divider maxWidth="50rem" mt="xl" />} */}
    </Box>
  ));
};

FeatureFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default FeatureFeed;
