import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import isEmpty from 'lodash/isEmpty';

import { Box, Button, Icon } from 'ui-kit';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

// todo : the quickest way to ship this feature was to hardcode these values. A more elegant solution should be worked out at some point in the future.
const VIDEO_URI = {
  sisterhood:
    'https://link.theplatform.com/s/IfSiAC/media/gMIs5lxTQwK1/file.m3u8?format=redirect&formats=m3u,mpeg4',
  crew: 'https://link.theplatform.com/s/IfSiAC/media/ZWXl6MnuPxWk/file.m3u8?format=redirect&formats=m3u,mpeg4',
  marriedPeople:
    'https://link.theplatform.com/s/IfSiAC/media/YzTluBLlGRWE/file.m3u8?format=redirect&formats=m3u,mpeg4',
  everyone:
    'https://link.theplatform.com/s/IfSiAC/media/MfzW24ax8KJB/file.m3u8?format=redirect&formats=m3u,mpeg4',
  youngAdults:
    'https://link.theplatform.com/s/IfSiAC/media/VH3iIxwYPf_X/file.m3u8?format=redirect&formats=m3u,mpeg4',
  freedomCare:
    'https://link.theplatform.com/s/IfSiAC/media/ulPNeyTh2y55/file.m3u8?format=redirect&formats=m3u,mpeg4',
  classes: 'http://link.theplatform.com/s/IfSiAC/media/gPUhOJHomYsB',
};

/**
 * Convenience hook that returns the onClick method for the Video Button.
 *
 * @param {string} uri    | The uri of the video that you want played
 * @param {string} poster | The uri of the poster image for the video
 * @returns {array}       | Function that runs on click
 */
function useHandleButtonClick(uri, poster) {
  const modalDispatch = useModalDispatch();

  const method = () => {
    if (isEmpty(uri)) return;

    modalDispatch(
      showModal('Video', {
        step: 0,
        uri,
        poster,
      })
    );
  };

  return [method];
}
function VideoPlayButton(props = {}) {
  const videoUri = VIDEO_URI[camelCase(props?.title)];
  const [onClick] = useHandleButtonClick(videoUri, props?.poster);

  if (isEmpty(videoUri)) return null;

  return (
    <Button variant="tertiary" rounded={true} onClick={onClick}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Icon name="play" mr="s" />
        {`Watch Video`}
      </Box>
    </Button>
  );
}

VideoPlayButton.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default VideoPlayButton;
