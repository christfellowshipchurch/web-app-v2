import React from 'react';
import PropTypes from 'prop-types';

import {
  HeroListFeature,
  HorizontalCardListFeature,
  VerticalCardListFeature,
} from '../';
import { FeatureProvider } from 'providers';
import { Box, Divider } from 'ui-kit';
import { getComponent } from 'utils';

const FEATURE_COMPONENTS = {
  HeroListFeature,
  HorizontalCardListFeature,
  VerticalCardListFeature,

  // TODO: Implement all Features needed for web
  // ActionListFeature: () => null,
  // ActionBarFeature: () => null,
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
      {isLastItem(i) && <Divider maxWidth="50rem" mt="xl" />}
    </Box>
  ));
};

FeatureFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default FeatureFeed;
