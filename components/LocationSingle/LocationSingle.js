import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { createMarkup } from 'utils';

import {
  ContentLayout,
  Layout,
  NotFound,
  VerticalModalCardListFeature,
} from 'components';

import { Box, Cell, Longform, utils } from 'ui-kit';
import Styled from './LocationSingle.styles';

function LocationSingle(props = {}) {
  // note : this means that there is not a valid page found on the API, so we'll render the 404 message
  if (!props.loading && !props?.data?.id) {
    return <NotFound />;
  }

  return (
    <Layout
      title={props?.data?.title}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={0}
      contentVerticalPadding={0}
    >
      {props?.data?.coverImage && (
        <Styled.Hero coverImage={props?.data?.coverImage?.sources[0]?.uri}>
          <Styled.Title>{props?.data?.title}</Styled.Title>
        </Styled.Hero>
      )}

      <Cell maxWidth={utils.rem('1100px')} px="base" py={{ _: 'l', lg: 'xl' }}>
        <ContentLayout
          summary={props?.data?.subtitle}
          renderA={() => {
            return (
              props?.data?.title && (
                <Box
                  fontSize="l"
                  maxWidth="840px"
                  margin="auto"
                  textAlign="center"
                >
                  {props?.data?.htmlContent && (
                    <Longform
                      dangerouslySetInnerHTML={createMarkup(
                        props?.data?.htmlContent
                      )}
                    />
                  )}
                </Box>
              )
            );
          }}
          features={props?.data?.featureFeed?.features}
          additionalFeatures={{
            VerticalCardListFeature: VerticalModalCardListFeature,
          }}
        />
      </Cell>
    </Layout>
  );
}

LocationSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default LocationSingle;
