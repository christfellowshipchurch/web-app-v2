import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import Styled from './VideoHeader.styles';
import { useCurrentBreakpoint } from 'hooks';

function VideoHeader(props = {}) {
  let currentBreakpoint = useCurrentBreakpoint();

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems={{ _: 'flex-end', sm: 'center' }}
      {...props}
    >
      <Box height={{ _: 300, sm: 500, md: 600, lg: 700 }}>
        <Styled.VideoCover
          src={
            currentBreakpoint.isSmall
              ? props?.backgroundVideo?.mobile ||
                props?.backgroundVideo?.desktop
              : props?.backgroundVideo?.desktop
          }
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        />
      </Box>
      {props?.overlay && <Styled.VideoOverlay />}
      {/* Logo */}
      <Styled.LogoOverlay
        maxWidth={1200}
        width={props?.logoWidth ? props?.logoWidth : { _: '90%', md: '80%' }}
        aspectRatio={props?.logoAspectRatio}
        src={props?.logoOverlay}
      />
    </Box>
  );
}

VideoHeader.propTypes = {
  // Whether to display the overlay that darkens the video
  overlay: PropTypes.bool,
};

VideoHeader.defaultProps = {
  overlay: true,
};

export default VideoHeader;
