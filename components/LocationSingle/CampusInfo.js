import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Cell, Divider, Icon, utils } from 'ui-kit';

import Styled from './LocationSingle.styles';

const CampusInfo = (props = {}) => (
  <>
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
            {props?.serviceTimes &&
              props?.serviceTimes?.map((n, i) => [
                <Styled.ServiceTime key={i}>{n}</Styled.ServiceTime>,
                <>
                  {i < props?.serviceTimes.length - 1 && (
                    <Styled.VerticalDivider key={i} />
                  )}
                </>,
              ])}
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
          {props?.address && (
            <>
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
                  href={`https://www.google.com/maps/place/${props?.address?.replace(
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
            </>
          )}
          <Box display={{ _: 'none', md: 'flex' }} mt="l">
            <Box as="h3" color="secondary" minWidth={155}>
              Get the Most Out of Life
            </Box>
            <Box mx="l">
              <Box as="p">
                {`Here at Christ Fellowship Church in ${props?.campus}, we want to help you live the life you were created for. Every Sunday, we have church services where you can experience uplifting worship music, encouraging messages from our pastors, special programming for your family, and opportunities for you to find people to do life with all throughout the week—and it all starts here!`}
              </Box>
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
        minWidth={{ _: '', lg: 380 }}
      >
        <Box display="flex" alignItems="center">
          <Divider width={80} mx="s" bg="neutrals.200" />
          <Avatar
            width="90px"
            height="90px"
            name="campus-pastors"
            src="/pastor-pic.png"
          />
          <Divider width={80} mx="s" bg="neutrals.200" />
        </Box>
        <Box as="h3" mx="l">
          {props?.campusPastors?.name}
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
          <Button
            size="xs"
            px="base"
            borderRadius="xxl"
            variant="secondary"
            mr="xs"
          >
            ADD TO CALENDAR
          </Button>
          <Button
            size="xs"
            px="base"
            borderRadius="xxl"
            ml={{ _: 0, lg: 'xs' }}
            m={{ _: 'xs', lg: 0 }}
          >
            INVITE A FRIEND
          </Button>
        </Box>
        {/**
         * todo : Add urls to social media links
         **/}
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
          Here at Christ Fellowship Church in Palm Beach Gardens, we have Sunday
          church services where you can experience uplifting worship music,
          powerful messages from our pastors, special programming for your
          family, and an opportunity to meet other amazing people like you!
        </Box>
        <br />
        <Box as="p">We look forward to seeing you this Sunday!</Box>
      </Box>
    </Box>
  </>
);

CampusInfo.propTypes = {
  address: PropTypes.string,
  campusPastors: {
    name: PropTypes.string,
    photo: PropTypes.string,
  },
  serviceTimes: PropTypes.array,
};

CampusInfo.defaultProps = {
  address: '5343 Northlake Blvd. Palm Beach Gardens, FL 33418',
  campusPastors: {
    name: 'Dave and Rhonda Simiele',
    photo: '',
  },
  serviceTimes: ['8:30AM', '10AM', '11:45AM', '5PM'],
};

export default CampusInfo;
