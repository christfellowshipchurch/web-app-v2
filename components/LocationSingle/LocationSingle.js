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
        <Box
          mt={{ _: 0, md: 'xxl' }}
          position="absolute"
          width={{ _: '90%', md: '80%' }}
          zIndex={1}
        >
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
              <Button
                as="a"
                href="#service-times"
                mt="s"
                mr={{ _: 's', md: 'base' }}
              >
                Join Us Sunday
              </Button>
              <Button
                as="a"
                href="#get-connected"
                id="service-times"
                mt="s"
                variant="tertiary"
              >
                Get Connected
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Campus Information */}
      <Cell
        alignItems={{ _: 'center', md: 'start' }}
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent="center"
        maxWidth={utils.rem('1000px')}
        mx="auto"
        position="relative"
        px={{ _: 0, md: 'base' }}
        top="-2.7rem"
        zIndex={1}
        width="100%"
      >
        {/* Service Times */}
        <Box width="100%">
          <Styled.ServiceTimeBox>
            <Box as="h4" mb={{ _: 's', sm: 0 }} color="neutrals.300">
              Every Sunday
            </Box>
            <Box display="flex" alignItems="center" px={0}>
              <Styled.ServiceTime>8:30AM</Styled.ServiceTime>
              <Styled.VerticalDivider />
              <Styled.ServiceTime>10AM</Styled.ServiceTime>
              <Styled.VerticalDivider />
              <Styled.ServiceTime>11:45AM</Styled.ServiceTime>
              <Styled.VerticalDivider />
              <Styled.ServiceTime>5PM</Styled.ServiceTime>
            </Box>
          </Styled.ServiceTimeBox>

          {/* Addtional Information */}
          <Box mr={{ _: 0, md: 'l' }}>
            <Styled.InfoBox>
              <Box as="li">CFKids services takes place at each service</Box>
              <Box as="li">Traducciones al español ofrecidas a las 11:45am</Box>
              <Box as="li">ASL interpretation offered at 10am</Box>
            </Styled.InfoBox>
            {/* Address and Church You Call Home */}
            <Box
              display="flex"
              flexDirection={{ _: 'column', md: 'row' }}
              alignItems={{ _: 'center', md: 'start' }}
              mx={{ _: 'l', md: 0 }}
              py="l"
              mt={{ _: 0, md: 'base' }}
            >
              <Box
                display={{ _: 'none', md: 'flex' }}
                as="h3"
                mr="xxl"
                color="secondary"
              >
                Address
              </Box>
              <Box
                as="h3"
                textAlign={{ _: 'center', md: 'start' }}
                px="base"
                mx={{ _: 'base', md: 0 }}
              >
                5343 Northlake Blvd. Palm Beach Gardens, FL 33418
              </Box>
              <Button borderRadius="xxl" size="s" px="base">
                GET DIRECTIONS
              </Button>
            </Box>
            <Divider display={{ _: 'none', md: 'flex' }} width="100%" />
            <Box display={{ _: 'none', md: 'flex' }} mt="l">
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
          left={{ _: 0, md: '-1rem' }}
          boxShadow="l"
        >
          <Box as="h3">Campus Pastors</Box>
        </Box>
      </Cell>

      {/* Mobile View for "Church You Can Call Home" section */}
      <Box display={{ _: 'inline', md: 'none' }} mt="l" textAlign="center">
        <Box as="h3" color="secondary">
          A Church You Can Call Home
        </Box>
        <Box mx={{ _: 'base', sm: 'xl' }}>
          <Box as="p">
            Here at Christ Fellowship Church in Palm Beach Gardens, we have
            Sunday church services where you can experience uplifting worship
            music, powerful messages from our pastors, special programming for
            your family, and an opportunity to meet other amazing people like
            you!
          </Box>
          <br />
          <Box as="p">We look forward to seeing you this Sunday!</Box>
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
