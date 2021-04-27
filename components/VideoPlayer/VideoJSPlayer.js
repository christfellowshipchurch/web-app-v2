import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { Box, Heading } from 'ui-kit';

// eslint-disable-next-line import/prefer-default-export
const usePlayer = ({ src, controls, autoplay, fluid }) => {
  const options = {
    fill: true,
    preload: 'auto',
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  };
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (player === null) {
      const vjsPlayer = videojs(videoRef.current, {
        ...options,
        fluid,
        controls,
        autoplay,
        sources: [src],
      });
      setPlayer(vjsPlayer);
    } else if (player) {
      player.src({ src });
    }

    return () => player?.dispose();
  }, [src]);

  return videoRef;
};

const VideoPlayer = ({ src, controls, autoplay, fluid, ...props }) => {
  const playerRef = usePlayer({ src, controls, autoplay, fluid });

  return (
    <Box position="relative" {...props}>
      {props.title ? (
        <Heading
          fontSize="h2"
          position="absolute"
          bottom="s"
          left="m"
          color="white"
          zIndex="1"
        >
          {props.title}
        </Heading>
      ) : null}
      <div data-vjs-player>
        <video
          ref={playerRef}
          className="video-js"
          title={props.title}
          poster={props.poster}
          width="100%"
          height="auto"
        />
      </div>
    </Box>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  fluid: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  fluid: true,
  controls: true,
  autoplay: false,
};

export default VideoPlayer;
