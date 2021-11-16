import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';

import { ContentLayout, Layout, NotFound } from 'components';

import { Box, Cell, Image, Loader, Longform, utils } from 'ui-kit';
import Styled from './LocationSingle.styles';

function LocationSingle(props = {}) {
  const coverImage = props?.data?.coverImage?.sources[0]?.uri;

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

  return (
    <Layout
      title={props?.data?.title}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
    >
      <Box display="flex" justifyContent="center" alignItems="end">
        <Styled.Cover
          src={coverImage}
          width="100%"
          maxWidth={1100}
          height={{ _: 200, md: 300, lg: 470 }}
          borderRadius={{ _: 'none', lg: 'base' }}
          mt={{ _: 0, md: 0, lg: 'base' }}
          mx="auto"
          overlay
        />
        <Box
          as="h1"
          textAlign="center"
          color="white"
          position="absolute"
          mb={{ _: 'l', lg: 'xl' }}
          zIndex={1000}
          mx="base"
        >
          {props?.data?.title}
        </Box>
      </Box>

      {/* ----------- These are alternate styles for the header image -------------- */}

      {/* Option - 1 */}

      {/* <Box display="flex" justifyContent="center" alignItems="end">
        <Image
          source={coverImage}
          aspectRatio="21by9"
          maxWidth={1100}
          mx="auto"
          mt="base"
        />
        <Box
          as="h1"
          color="white"
          position="absolute"
          background="rgb(100,100,100,0.8)"
          p="base"
          mt="base"
          borderRadius="base"
        >
          {props?.data?.title}
        </Box>
      </Box> */}

      {/* Option - 2 */}

      {/* <Box display="flex" justifyContent="center" alignItems="center">
        <Styled.Cover
          src={coverImage}
          width="100%"
          maxWidth={1100}
          height={{ _: 200, md: 300, lg: 470 }}
          borderRadius={{ _: 'none', lg: 'base' }}
          mt={{ _: 0, md: 0, lg: 'base' }}
          mx="auto"
          overlay
        />
        <Box
          as="h1"
          textAlign="center"
          color="white"
          position="absolute"
          mt="l"
          borderRadius="base"
          background="rgb(100,100,100,0.85)"
          p={{ _: 's', md: 'base' }}
          zIndex={1000}
          mx="base"
        >
          {props?.data?.title}
        </Box>
      </Box> */}

      {/* ----------------------------------------------------------------- */}

      <Cell maxWidth={utils.rem('1100px')} px="base">
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
