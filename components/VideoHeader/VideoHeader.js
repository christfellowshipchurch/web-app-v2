import React from 'react';
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
    >
      <Box height={{ _: 300, sm: 500, md: 600, lg: 700 }}>
        <Styled.VideoCover
          mx="auto"
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
      <Styled.VideoOverlay />
      {/* Logo */}
      {props?.logoOverlay && (
        <Styled.LogoOverlay
          width={{ _: 'auto', md: '80%' }}
          src={props?.logoOverlay}
        />
      )}
    </Box>
  );
}

export default VideoHeader;
