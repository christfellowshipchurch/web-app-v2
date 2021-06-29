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
  size = 'l',
  ...props
} = {}) {
  let textPadding;
  let fontSize;
  let lineHeight;
  let iconSize;

  switch (size) {
    case 's':
      textPadding = '15px 24px 15px';
      fontSize = '14px';
      lineHeight = '18px';
      iconSize = 16;
      break;
    case 'm':
      textPadding = '15px 24px 15px';
      fontSize = '20px';
      lineHeight = '24px';
      iconSize = 24;
      break;
    case 'l':
    default:
      textPadding = '25px 34px 25px';
      fontSize = '28px';
      lineHeight = '34px';
      iconSize = 36;
      break;
  }

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
        padding={textPadding}
        backgroundColor="rgba(0, 0, 0, 0.75)"
        width="100%"
        borderRadius="0 0 24px 24px"
      >
        {text && (
          <Heading
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight="700"
          >
            <span style={{ marginRight: '36px' }}>{text}</span>
            {action && (
              <ArrowCircleRight
                style={{ float: 'right' }}
                size={iconSize}
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
  src: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.func,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default LargeImage;
