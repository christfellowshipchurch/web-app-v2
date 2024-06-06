import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';

import { ContentLayout, Layout, NotFound, Video } from 'components';

import { Box, Cell, Loader, Longform, utils } from 'ui-kit';
import Styled from './OldLocationSingle.styles';

function LocationSingle(props = {}) {
  const coverImage = props?.data?.coverImage?.sources[0]?.uri;
  const videoLink = props?.data?.videoLink;

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
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="end"
      >
        {videoLink ? (
          <Styled.Cover
            width="100%"
            height={{ _: 350, lg: 600 }}
            borderRadius={{ _: 'none', lg: 'base' }}
            mx="auto"
            overlay
          >
            <Video wistiaId={videoLink} />
          </Styled.Cover>
        ) : (
          <Styled.Cover
            width="100%"
            src={coverImage}
            height={{ _: 350, lg: 600 }}
            borderRadius={{ _: 'none', lg: 'base' }}
            mx="auto"
            overlay
          />
        )}
        <Box textAlign="center" zIndex={1} position="absolute" mb="l">
          <Box
            as="h1"
            fontSize={{ _: 40, md: 48, lg: 60 }}
            color="white"
            textShadow="4px 4px 4px rgb(0 0 0 / 30%)"
            mt="l"
            maxWidth={{ _: 500, md: 600, lg: 1200 }}
            mx="auto"
          >
            {props?.data?.title}
          </Box>
          {/**
           * note : I'm leavin this subtitle here in case we want to use it in the future
           **/}
          {/* <Box
            px="base"
            fontSize={{ _: 24, md: 24, lg: 30 }}
            color="white"
            textShadow="4px 4px 4px rgb(0 0 0 / 30%)"
            mt={{ _: 10, sm: 0, md: 8, lg: 8 }}
          >
            A church that wants to help you live the life you were created for.
          </Box> */}
        </Box>
      </Box>

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
