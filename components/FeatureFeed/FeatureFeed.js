import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../ui-kit';

import { FeatureProvider } from '../../providers';
import {
  HeroListFeature,
  HorizontalCardListFeature,
  VerticalCardListFeature,
} from '../index';

//This component is created to map the features by type and send them
const FeatureFeed = (props = {}) => {

  const CardListComponents = {
    HeroListFeature,
    HorizontalCardListFeature,
    VerticalCardListFeature,
  }

  return props.data?.map((edge, i) => {
    let { __typename } = edge;
    if (!__typename && itemId) {
      [__typename] = itemId.split(':');
    }
    const CardListComponent = CardListComponents[__typename]
    return (
      <Box pb="xl">
        <Box as="h2" pb='base'>{edge.title}</Box>
        <FeatureProvider
          Component={CardListComponent}
          options={{
            variables: {
              featureId: edge?.id,
            },
          }}
        />
        {i < (props.data.length - 1) &&
          <Box as='hr' maxWidth="50rem" mt='xl' mx='auto'/>
        }
      </Box>
    );
   
  });
};

FeatureFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default FeatureFeed;
