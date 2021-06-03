import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import styled, { css } from 'styled-components';
import { Box, Heading } from 'ui-kit';
import { themeGet } from '@styled-system/theme-get';

// eslint-disable-next-line import/prefer-default-export
const usePlayer = ({ src, controls, autoplay, fluid, onError }) => {
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
      vjsPlayer.on('error', () => {
        onError?.();
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
  div[data-vjs-player='true'],
  .vjs-poster,
  .vjs-tech {
    transition: border-radius ease 0.5s;
  }

  div[data-vjs-player='true']:not(.vjs-has-started),
  div[data-vjs-player='true']:not(.vjs-has-started) .vjs-poster,
  div[data-vjs-player='true']:not(.vjs-has-started) .vjs-tech {
    ${props => {
      if (!props.rounded) return '';

      if (Object.values(props.rounded)?.length > 0) {
        const rounded = { ...props.rounded };
        delete rounded._;

        return css`
          ${props.rounded?._
            ? css`
                border-radius: ${themeGet(`radii.${props.rounded?._}`)};
              `
            : ''}

          ${Object.entries(rounded).map(
            ([breakpoint, radius]) => css`
              @media screen and (min-width: ${themeGet(
                  `breakpoints.${breakpoint}`
                )}) {
                border-radius: ${themeGet(`radii.${radius}`)};
              }
            `
          )}
        `;
      }

      return css`
        border-radius: ${props.rounded};
      `;
    }}
  }

  .vjs-poster {
    filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));
  }

  .vjs-big-play-button {
    line-height: 90px;
    font-size: 20px;
    height: 90px;
    width: 90px;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
    padding: 0;
    border: 2px solid #fff;
    background-color: transparent;
    border-radius: 50%;
  }

  .vjs-big-play-button .vjs-icon-placeholder:before {
    font-size: 60px;
  }
`;

const VideoPlayer = ({ src, controls, autoplay, fluid, onError, ...props }) => {
  const playerRef = usePlayer({ src, controls, autoplay, fluid, onError });

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
