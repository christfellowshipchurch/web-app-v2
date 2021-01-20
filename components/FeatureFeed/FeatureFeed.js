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

//This component is created to map the features by type and send them
const FeatureFeed = (props = {}) => {
  const CardListComponents = {
    HeroListFeature,
    HorizontalCardListFeature,
    VerticalCardListFeature,
  };

  const isLastItem = i => i < props.data.length - 1;

  return props.data?.map((edge, i) => (
    <Box pb="xl">
      <Box as="h2" pb="base">
        {edge.title}
      </Box>
      <FeatureProvider
        Component={getComponent(edge, CardListComponents)}
        options={{
          variables: {
            featureId: edge?.id,
          },
        }}
      />
      {isLastItem(i) && <Divider />}
    </Box>
  ));
};

FeatureFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default FeatureFeed;
