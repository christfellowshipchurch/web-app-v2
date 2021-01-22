import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading } from 'ui-kit';
import { StyledImage } from './MainPhotoHeader.styles';

function MainPhotoHeader({ src, category, title, subtitle } = {}) {
  return (
    <Box position="relative">
      <StyledImage as="img" src={src} name="main-photo-header" />
      <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
        {category && (
          <Heading
            color="neutrals.100"
            variant="h2"
            opacity="50%"
            fontWeight="800"
          >
            {category}
          </Heading>
        )}
        {title && (
          <Heading
            color="neutrals.100"
            variant="h1"
            fontWeight="800"
            textTransform="uppercase"
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading
            color="neutrals.100"
            variant="h3"
            fontWeight="700"
            maxWidth="360px"
          >
            {subtitle}
          </Heading>
        )}
      </Box>
    </Box>
  );
}

MainPhotoHeader.propTypes = {
  src: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default MainPhotoHeader;
