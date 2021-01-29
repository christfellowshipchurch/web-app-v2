import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { StyledImage } from './MainPhotoHeader.styles';

function MainPhotoHeader({ src, content, overlay } = {}) {
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
      {content}
    </Box>
  );
}

MainPhotoHeader.propTypes = {
  src: PropTypes.string.isRequired,
  overlay: PropTypes.string,
  content: PropTypes.node,
};

export default MainPhotoHeader;
