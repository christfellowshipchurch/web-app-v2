import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';
import dropRight from 'lodash/dropRight';

import { ContentLayout, Layout, NotFound } from 'components';

import { Box, Button, Cell, Divider, Loader, Longform, utils } from 'ui-kit';
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

      {/* Service Times */}
      <Cell
        position="relative"
        top="-2.7rem"
        maxWidth={utils.rem('1000px')}
        px="base"
        display="flex"
        justifyContent="center"
        alignItems="start"
        zIndex={1}
      >
        <Box>
          <Box
            alignItems="center"
            bg="secondary"
            borderRadius="base"
            display="flex"
            justifyContent="space-between"
            mt="base"
            py="base"
            px="l"
          >
            <Box as="h4" mb={0} color="neutrals.300">
              Every Sunday
            </Box>
            <Box as="h3" mb={0} color="white" mx="base">
              8:30AM
            </Box>
            <Box height={40} width={2} bg="neutrals.500" />
            <Box as="h3" mb={0} color="white" mx="base">
              10AM
            </Box>
            <Box height={40} width={2} bg="neutrals.500" />
            <Box as="h3" mb={0} color="white" mx="base">
              11:45AM
            </Box>
            <Box height={40} width={2} bg="neutrals.500" />
            <Box as="h3" mb={0} color="white" mx="base">
              5PM
            </Box>
          </Box>
          <Box mr="l">
            <Box display="flex" alignItems="start" py="l" mt="l">
              <Box as="h3" mr="xxl" color="secondary">
                Address
              </Box>
              <Box as="h3" px="base">
                5343 Northlake Blvd. Palm Beach Gardens, FL 33418
              </Box>
              <Button borderRadius="xxl" size="s" px="base">
                GET DIRECTIONS
              </Button>
            </Box>
            <Divider width="100%" />
            <Box display="flex" mt="l">
              <Box as="h3" color="secondary" minWidth={155}>
                A Church You Can Call Home
              </Box>
              <Box mx="l">
                <Box as="p">
                  Here at Christ Fellowship Church in Palm Beach Gardens, we
                  have Sunday church services where you can experience uplifting
                  worship music, powerful messages from our pastors, special
                  programming for your family, and an opportunity to meet other
                  amazing people like you!
                </Box>
                <br />
                <Box as="p">We look forward to seeing you this Sunday!</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Campus Pastors */}
        <Box
          bg="white"
          borderRadius="base"
          p="l"
          position="relative"
          left="-1rem"
          boxShadow="l"
        >
          <Box as="h3">Campus Pastors</Box>
        </Box>
      </Cell>

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
