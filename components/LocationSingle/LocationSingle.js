import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';
import dropRight from 'lodash/dropRight';

import { ContentLayout, Layout, NotFound } from 'components';

import {
  Box,
  Button,
  Cell,
  ContentBlock,
  Divider,
  Image,
  Loader,
  Longform,
  utils,
} from 'ui-kit';
import Styled from './LocationSingle.styles';

// UPDATE THIS COMPONENT

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
      transparentHeader
    >
      {/* Header Section */}
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems={{ _: 'flex-end', sm: 'center' }}
      >
        <Styled.VideoCover
          height={{ _: '90vh', sm: 500, lg: 700 }}
          mx="auto"
          mt={0}
          src="/external-landing/external-bg-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        />
        <Styled.VideoOverlay />
        <Box position="absolute" width={{ _: '90%', md: '80%' }} zIndex={1}>
          <Box maxWidth={{ _: 500, md: 600, lg: 750 }}>
            <Box
              as="h1"
              fontSize={{ _: 43, md: 50, lg: 60 }}
              mr="l"
              color="white"
            >
              {dropRight(props?.data?.title, 4)}
            </Box>
            <Divider my="base" />
            <Box
              display="flex"
              justifyContent={{ _: 'center', sm: 'flex-start' }}
              mb="xl"
            >
              <Button mt="s" mr={{ _: 's', md: 'base' }}>
                Join Us Sunday
              </Button>
              <Button mt="s" variant="tertiary">
                Get Connected
              </Button>
            </Box>
          </Box>
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
      <Box px="base" py="xl" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={1200}>
          <ContentBlock
            title="Never miss a thing."
            subtitle="Receive events and updates straight to your inbox!"
            actions={[
              {
                title: 'Subscribe',
                relatedNode: {
                  url: 'http://eepurl.com/hAk7aP',
                },
                mt: '-0.8rem',
              },
            ]}
          />
        </Box>
      </Box>
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
