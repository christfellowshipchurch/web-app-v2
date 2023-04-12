import React, { useState } from 'react';
import muxjs from 'mux.js';
import { Box, Button, Icon } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';

import ReactPlayer from 'react-player';
import { WistiaPlayer } from '@wistia/react-embeds';

// Mux is used to deal with encodings and low-level video nonsense.
// Without it, streams are unlikely to work on iOS and Safari.
if (typeof window !== 'undefined') {
  window.muxjs = muxjs;
}

export default function Video(props = {}) {
  const analytics = useAnalytics();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const playing = () => {
    setIsPlaying(true);
    setHasPlayed(true);
  };
  const notPlaying = () => setIsPlaying(false);

  return (
    <Box
      position="relative"
      height={props?.height}
      width={props?.width}
      className="react-player"
    >
      {/* If an ID for a Wistia Content Item is being passed through, use the Wistia player instead. */}
      {props?.wistiaId ? (
        <WistiaPlayer hashedId={props?.wistiaId} />
      ) : (
        <>
          <ReactPlayer
            height="100%"
            width="100%"
            url={props?.src}
            controls={true}
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
              <Button
                variant="link"
                onClick={e => {
                  analytics.track({
                    event: 'Video Played',
                    properties: {
                      content_title: `${props.title}`,
                      content_tag: props.segmentData.contentTags,
                      video_url: `${props?.src}`,
                    },
                  });
                  playing();
                }}
              >
                <Icon name="play" color="white" size="40%" opacity="0.95" />
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

Video.defaultProps = {
  height: '100%',
  width: '100%',
};
