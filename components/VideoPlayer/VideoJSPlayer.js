import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

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
    <div {...props}>
      <div data-vjs-player>
        <video ref={playerRef} className="video-js" />
      </div>
    </div>
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
