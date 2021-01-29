import { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PauseCircle, PlayCircle } from 'phosphor-react';
import { Box, Text, theme } from 'ui-kit';
import { StyledHeading, StyledRange, StyledVideo } from './VideoPlayer.styles';

function VideoPlayer({ src, title, details, stopPropagation, ...props } = {}) {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [duration, setDuration] = useState(0);
  const videoRef = createRef();
  const rangeRef = createRef();

  useEffect(() => {
    if (playing) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [playing, videoRef]);

  useEffect(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  }, [videoRef]);

  const VideoControl = playing ? PauseCircle : PlayCircle;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      onMouseEnter={() => {
        setShowControls(true);
      }}
      onMouseLeave={() => {
        if (playing) {
          setShowControls(false);
        }
      }}
    >
      <Box
        position="relative"
        display="flex"
        borderRadius="image"
        overflow="hidden"
        onClick={event => {
          if (!stopPropagation) {
            if (event.target !== rangeRef.current) {
              setPlaying(!playing);
            }
          }
        }}
      >
        <StyledVideo
          src={src}
          ref={videoRef}
          onTimeUpdate={() => {
            setTime(videoRef.current?.currentTime || 0);
          }}
        />
        <Box position="absolute" width="100%" height="100%">
          {showControls && (
            <>
              <StyledHeading>{title}</StyledHeading>
              <VideoControl
                size={48}
                color="white"
                style={{ position: 'absolute', right: '37px', bottom: '18px' }}
                onClick={() => setPlaying(!playing)}
              />
            </>
          )}
          <StyledRange
            ref={rangeRef}
            type="range"
            value={time}
            max={duration}
            onChange={event => {
              setTime(event.target.value);
              videoRef.current.currentTime = event.target.value;
            }}
          />
        </Box>
      </Box>
      {details && (
        <Text
          variant="h4"
          color="neutrals.900"
          fontWeight="400"
          opacity="60%"
          textAlign="center"
          mt="l"
          maxWidth={theme.breakpoints.md}
        >
          {details}
        </Text>
      )}
    </Box>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  details: PropTypes.string,
  title: PropTypes.string,
  stopPropagation: PropTypes.bool,
};

export default VideoPlayer;
