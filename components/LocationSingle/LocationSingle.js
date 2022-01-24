import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';
import dropRight from 'lodash/dropRight';

import { ContentLayout, Layout, NotFound } from 'components';

import {
  Avatar,
  Box,
  Button,
  Cell,
  Divider,
  Icon,
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
        <Box
          mt={{ _: 0, md: 'xxl' }}
          position="absolute"
          width={{ _: '90%', md: '80%' }}
          zIndex={1}
        >
          <Box
            height={{ _: '80vh', sm: 'auto' }}
            display={{ _: 'flex', sm: 'block' }}
            flexDirection="column"
            justifyContent="space-between"
            maxWidth={{ _: 500, md: 600, lg: 750 }}
          >
            <Box
              as="h1"
              fontSize={{ _: 38, md: 50, lg: 60 }}
              mr="l"
              color="white"
              mt="l"
            >
              {dropRight(props?.data?.title, 4)}
            </Box>
            <Box>
              <Box
                display="flex"
                justifyContent={{ _: 'center', sm: 'flex-start' }}
                mb="base"
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
              <Box>
                <Divider mb="l" />
              </Box>
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
        maxWidth={utils.rem('1100px')}
        mx="auto"
        position="relative"
        px={{ _: 0, md: 'base' }}
        top="-2.7rem"
        zIndex={1}
        width="100%"
      >
        {/* Service Times */}
        <Box width="100%">
          <Styled.ServiceTimeContainer>
            <Box as="h4" mb={{ _: 's', sm: 0 }} color="neutrals.300">
              Every Sunday
            </Box>
            <Styled.ServiceTimes>
              {props.serviceTimes &&
                props.serviceTimes.map((n, i) => (
                  <>
                    <Styled.ServiceTime>{n}</Styled.ServiceTime>
                    {i < props?.serviceTimes.length - 1 && (
                      <Styled.VerticalDivider />
                    )}
                  </>
                ))}
            </Styled.ServiceTimes>
          </Styled.ServiceTimeContainer>

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
                mx={{ _: 'base', md: 0 }}
                maxWidth={300}
                pl={5}
                pr="base"
              >
                {props?.address}
              </Box>
              <Button
                as="a"
                target="_blank"
                href={`https://www.google.com/maps/place/${props.address.replace(
                  ' ',
                  '+'
                )}`}
                borderRadius="xxl"
                size="s"
                px="base"
                ml={{ _: 0, md: 'auto' }}
              >
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
          position="relative"
          left={{ _: 0, md: '-1rem' }}
          boxShadow="l"
          py="l"
          px="base"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Box display="flex" alignItems="center">
            <Divider width={80} mx="s" bg="neutrals.200" />
            <Avatar width={70} src="/pastor-pic.png" />
            <Divider width={80} mx="s" bg="neutrals.200" />
          </Box>
          <Box as="h3" mx="l">
            Dave and Rhonda Simiele
          </Box>
          <Box
            as="h5"
            fontWeight="normal"
            fontStyle="italic"
            color="neutrals.700"
          >
            Campus Pastors
          </Box>
          <Divider width="100%" my="base" bg="neutrals.200" />
          <Box as="h5" fontStyle="italic" mb="base">
            We can’t wait to see you this weekend!
          </Box>
          <Box display={{ _: 'inline', lg: 'flex' }}>
            <Button size="xs" borderRadius="xxl" variant="secondary" mr="xs">
              ADD TO CALENDAR
            </Button>
            <Button
              size="xs"
              borderRadius="xxl"
              ml={{ _: 0, lg: 'xs' }}
              m={{ _: 'xs', lg: 0 }}
            >
              INVITE A FRIEND
            </Button>
          </Box>
          <Box mt="base">
            <Box as="a" color="tertiary" href={''} mr="xs">
              <Icon name="facebook" size="32" />
            </Box>
            <Box as="a" color="tertiary" href={''}>
              <Icon name="instagram" size="32" />
            </Box>
          </Box>
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
  serviceTimes: PropTypes.array,
  address: PropTypes.string,
};

LocationSingle.defaultProps = {
  loading: true,
  serviceTimes: ['8:30AM', '10AM', '11:45AM', '5PM'],
  address: '5343 Northlake Blvd. Palm Beach Gardens, FL 33418',
};

export default LocationSingle;
