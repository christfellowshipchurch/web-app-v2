import React from 'react';
import PropTypes from 'prop-types';
import dropRight from 'lodash/dropRight';

import { Box, Button, Divider } from 'ui-kit';
import Styled from './LocationSingle.styles';

const LocationHeader = (props = {}) => (
  <Box
    position="relative"
    display="flex"
    justifyContent={{ _: 'flex-start', lg: 'center' }}
    alignItems={{ _: 'flex-end', sm: 'center' }}
    backgroundImage="url(/groups-cover-image.png)"
  >
    <Box
      pt={{ _: 0, sm: '56.25%', lg: 0 }}
      height={{ _: '90vh', sm: 500, md: 0, lg: 700 }}
    >
      <Styled.VideoCover
        mx="auto"
        src="/external-landing/external-bg-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        type="video/mp4"
      />
    </Box>
    <Styled.VideoOverlay />
    <Box
      position="absolute"
      mx="base"
      width={{ _: 'auto', md: '90%' }}
      maxWidth={1200}
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
          fontSize={{ _: 38, md: 48, lg: 60 }}
          color="white"
          textShadow="4px 4px 4px rgb(0 0 0 / 30%)"
          mt="l"
        >
          {/* {dropRight(props?.title, 4)} */}
          {props?.title}
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent={{ _: 'space-between', sm: 'flex-start' }}
            mb="base"
          >
            <Button
              as="a"
              href="#service-times"
              mt="s"
              mr={{ _: 'xs', md: 'base' }}
              width={{ _: '100%', sm: 'auto' }}
            >
              Join Us Sunday
            </Button>
            <Button
              as="a"
              href="https://rock.gocf.org/connect"
              id="service-times"
              mt="s"
              target="_blank"
              variant="tertiary"
              ml={{ _: 'xs', md: 0 }}
              width={{ _: '100%', sm: 'auto' }}
            >
              Get Connected
            </Button>
          </Box>
          <Box>
            <Divider bg="white" opacity="30%" mb="xl" mt="l" />
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