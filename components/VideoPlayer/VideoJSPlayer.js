import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import styled from 'styled-components';
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

const VideoStyles = styled.div`
  div[data-vjs-player=true], .vjs-poster, .vjs-tech {
    transition: border-radius ease 0.5s;
  }

  div[data-vjs-player=true]:not(.vjs-has-started),
  div[data-vjs-player=true]:not(.vjs-has-started) .vjs-poster,
  div[data-vjs-player=true]:not(.vjs-has-started) .vjs-tech {
    border-radius: 24px;
  }

  .vjs-poster {
    filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));
  }
`;

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
      <VideoStyles>
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
      </VideoStyles>
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
