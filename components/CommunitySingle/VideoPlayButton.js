import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import isEmpty from 'lodash/isEmpty';

import { Box, Button, Icon } from 'ui-kit';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

// todo : the quickest way to ship this feature was to hardcode these values. A more elegant solution should be worked out at some point in the future.
const VIDEO_URI = {
  sisterhood:
    'https://embed-ssl.wistia.com/deliveries/5d8991034a88d1603dd84f4643ffb14e/file.mp4',
  crew: 'https://embed-ssl.wistia.com/deliveries/ad8b07c4b0fc53c989e06fabbe4e4bbecf5f601f/file.mp4',
  marriedPeople:
    'https://embed-ssl.wistia.com/deliveries/16722c2758ed52f8695a1626ba90fe2087a7988b/file.mp4',
  everyone:
    'https://embed-ssl.wistia.com/deliveries/239e00728753517b278a453af6a02fc830ecdd2b/file.mp4',
  youngAdults:
    'https://embed-ssl.wistia.com/deliveries/2b6bd8002765ac55e6ecb3d37b8142966007151d/file.mp4',
  freedomCare:
    'https://embed-ssl.wistia.com/deliveries/89d211c465d24fa309feabc46e7e9e28c11d89fb/file.mp4',
  classes:
    'https://embed-ssl.wistia.com/deliveries/37eccdfa6d350bb0c1e2d895cfe164a4ffb81c4d/file.mp4',
};

/**
 * Convenience hook that returns the onClick method for the Video Button.
 *
 * @param {string} uri    | The uri of the video that you want played
 * @param {string} poster | The uri of the poster image for the video
 * @returns {array}       | Function that runs on click
 */
function useHandleButtonClick(uri, poster, title) {
  const modalDispatch = useModalDispatch();

  const method = () => {
    if (isEmpty(uri)) return;

    modalDispatch(
      showModal('Video', {
        step: 0,
        uri,
        poster,
        title,
      })
    );
  };

  return [method];
}
function VideoPlayButton(props = {}) {
  const videoUri = VIDEO_URI[camelCase(props?.title)];
  const [onClick] = useHandleButtonClick(videoUri, props?.poster, props?.title);

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
