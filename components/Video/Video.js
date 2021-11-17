import React, { useState } from 'react';
import muxjs from 'mux.js';
import { Box, Button, Icon } from 'ui-kit';

import ReactPlayer from 'react-player';

// Mux is used to deal with encodings and low-level video nonsense.
// Without it, streams are unlikely to work on iOS and Safari.
if (typeof window !== 'undefined') {
  window.muxjs = muxjs;
}

export default function Video(props = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const playing = () => {
    setIsPlaying(true);
    setHasPlayed(true);
  };
  const notPlaying = () => setIsPlaying(false);

  return (
    <Box position="relative" height="100%" width="100%">
      <ReactPlayer
        url={props?.src}
        controls={true}
        width="100%"
        height="100%"
        playing={isPlaying}
        onPause={notPlaying}
        onSeek={playing}
        onPlay={playing}
      />
      {!isPlaying && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          top="0px"
          left="0px"
          background={
            hasPlayed
              ? `radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0))`
              : `radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.0)), url(${props?.poster})`
          }
          backgroundSize="cover"
        >
          <Button onClick={playing} variant="link">
            <Icon name="play" color="white" size="40%" opacity="0.95" />
          </Button>
        </Box>
      )}
    </Box>
  );
}
