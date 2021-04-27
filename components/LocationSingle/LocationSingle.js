import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { createMarkup } from 'utils';

import {
  ContentLayout,
  SEO,
  Header,
  Footer,
  Layout,
  NotFound,
} from 'components';

import { Box, Longform } from 'ui-kit';
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
      />
    </Layout>
  );
}

LocationSingle.propTypes = {
  data: PropTypes.array,
};

export default LocationSingle;
