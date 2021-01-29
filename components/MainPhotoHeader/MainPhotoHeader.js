import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { StyledImage } from './MainPhotoHeader.styles';

function MainPhotoHeader({ src, text, overlay } = {}) {
  return (
    <Box position="relative">
      <StyledImage as="img" src={src} name="main-photo-header" />
      {overlay && (
        <Box
          width="100%"
          height="100%"
          top="0"
          left="0"
          position="absolute"
          background={overlay}
        />
      )}
      {text}
    </Box>
  );
}

MainPhotoHeader.propTypes = {
  src: PropTypes.string.isRequired,
  overlay: PropTypes.string,
  text: PropTypes.node,
};

export default MainPhotoHeader;
