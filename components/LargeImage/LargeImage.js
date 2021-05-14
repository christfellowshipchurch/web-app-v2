import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleRight } from 'phosphor-react';

import { Box, Heading } from 'ui-kit';
import { noop } from 'utils';

import Styled, { StyledImage } from './LargeImage.styles';

function LargeImage({
  src,
  color,
  text,
  action,
  dropShadow = true,
  ...props
} = {}) {
  return (
    <Styled
      onClick={action ? action : noop}
      clickable={Boolean(action)}
      {...props}
    >
      <StyledImage src={src} rounded dropShadow={dropShadow} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        padding="25px 34px 25px"
        backgroundColor="rgba(0, 0, 0, 0.75)"
        width="100%"
        borderRadius="0 0 24px 24px"
      >
        {text && (
          <Heading
            color={color}
            fontSize="28px"
            lineHeight="35px"
            fontWeight="700"
          >
            <span style={{ marginRight: '36px' }}>{text}</span>
            {action && (
              <ArrowCircleRight
                style={{ float: 'right' }}
                size={36}
                color={color}
              />
            )}
          </Heading>
        )}
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
