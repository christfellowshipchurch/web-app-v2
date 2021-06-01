import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';

import { Box, Button, Icon } from 'ui-kit';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

const VIDEO_URI = {
  sisterhood:
    'https://link.theplatform.com/s/IfSiAC/media/gMIs5lxTQwK1/file.m3u8?format=redirect&formats=m3u,mpeg4',
  crew:
    'https://link.theplatform.com/s/IfSiAC/media/sGI100_ZBu7A/file.m3u8?format=redirect&formats=m3u,mpeg4',
  marriedPeople:
    'https://link.theplatform.com/s/IfSiAC/media/YzTluBLlGRWE/file.m3u8?format=redirect&formats=m3u,mpeg4',
  everyone:
    'https://link.theplatform.com/s/IfSiAC/media/MfzW24ax8KJB/file.m3u8?format=redirect&formats=m3u,mpeg4',
  youngAdults:
    'https://link.theplatform.com/s/IfSiAC/media/VH3iIxwYPf_X/file.m3u8?format=redirect&formats=m3u,mpeg4',
  freedomCare:
    'https://link.theplatform.com/s/IfSiAC/media/ulPNeyTh2y55/file.m3u8?format=redirect&formats=m3u,mpeg4',
};

function VideoPlayButton(props = {}) {
  const modalDispatch = useModalDispatch();

  function handleOnClick() {
    modalDispatch(
      showModal('Video', {
        step: 0,
        uri: VIDEO_URI[camelCase(props?.title)],
        poster: props?.poster,
      })
    );
  }

  return (
    <Button variant="tertiary" rounded={true} onClick={handleOnClick}>
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
