import React from 'react';
import PropTypes from 'prop-types';
import dropRight from 'lodash/dropRight';

import { Box, Button, Divider } from 'ui-kit';
import Styled from './LocationSingle.styles';

const LocationHeader = (props = {}) => (
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
          {dropRight(props?.title, 4)}
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
);

LocationHeader.propTypes = {
  title: PropTypes.string,
};

LocationHeader.defaultProps = {
  title: 'Palm Beach Gardens',
};

export default LocationHeader;
