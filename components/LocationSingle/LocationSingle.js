import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';
import isEmpty from 'lodash/isEmpty';

import { ContentLayout, Layout, NotFound } from 'components';

import { Box, Cell, Loader, Longform, utils } from 'ui-kit';
import Styled from './LocationSingle.styles';

function LocationSingle(props = {}) {
  if (props.loading) {
    return (
      <Layout
        title="Location"
        contentMaxWidth={'100vw'}
        contentHorizontalPadding={'0'}
        contentVerticalPadding={'0'}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          width="100%"
          minHeight="50vh"
        >
          <Loader />
        </Box>
      </Layout>
    );
  }

  // note : this means that there is not a valid page found on the API, so we'll render the 404 message
  if (!props.loading && !props?.data?.id) {
    return <NotFound />;
  }

  const image = props.data.coverImage;
  console.log({ image });

  return (
    <Layout
      title={props?.data?.title}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
    >
      {!isEmpty(props?.data?.coverImage) && (
        <Styled.Hero
          coverImage={props?.data?.coverImage?.sources[0]?.uri}
          title={props?.data?.title}
        >
          {!isEmpty(props?.data?.title) && (
            <Styled.Glass>
              <Styled.GlassContent>
                <Box as="h1">{props?.data?.title}</Box>
                <Box as="h4" fontStyle="italic" fontWeight="normal">
                  {props?.data?.summary}
                </Box>
              </Styled.GlassContent>
            </Styled.Glass>
          )}
        </Styled.Hero>
      )}

      <Cell maxWidth={utils.rem('1100px')} px="base">
        <Box as="h1" pt="l" textAlign="center">
          {props?.data?.title}
        </Box>
        <ContentLayout
          renderA={() => {
            return (
              (props?.data?.summary || props?.data?.htmlContent) && (
                <Box
                  fontSize="l"
                  maxWidth="840px"
                  margin="auto"
                  textAlign="center"
                >
                  {props?.data?.summary && (
                    <Box as="h2" paddingBottom="m">
                      {props?.data?.summary}
                    </Box>
                  )}
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
      </Cell>
    </Layout>
  );
}

LocationSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
};

LocationSingle.defaultProps = {
  loading: true,
};

export default LocationSingle;
