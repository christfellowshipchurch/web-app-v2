import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleRight } from 'phosphor-react';

import { Box, Heading } from 'ui-kit';
import { noop } from 'utils';

import Styled, { StyledImage } from './LargeImage.styles';

function LargeImage({ src, color, text, action } = {}) {
  return (
    <Styled onClick={action ? action : noop} clickable={Boolean(action)}>
      <StyledImage src={src} rounded />
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        position="absolute"
        bottom="26px"
        left="34px"
        right="34px"
      >
        {text && (
          <Heading
            color={color}
            fontSize="28px"
            lineHeight="35px"
            fontWeight="700"
          >
            {text}
          </Heading>
        )}
        {action && <ArrowCircleRight size={48} color={color} />}
      </Box>
    </Styled>
  );
}

LargeImage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.func,
};

export default LargeImage;
