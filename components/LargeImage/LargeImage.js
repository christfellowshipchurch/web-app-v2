import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleRight } from 'phosphor-react';

import { Box, Heading } from 'ui-kit';

import Styled, { StyledImage, TextContainer } from './LargeImage.styles';

function getTextSizing(size) {
  let textPadding;
  let fontSize;
  let lineHeight;
  let iconSize;
  switch (size) {
    case 's':
      textPadding = '15px 24px 15px';
      fontSize = '14px';
      lineHeight = '18px';
      iconSize = '20px';
      break;
    case 'm':
      textPadding = '15px 24px 15px';
      fontSize = '20px';
      lineHeight = '24px';
      iconSize = '30px';
      break;
    case 'l':
    default:
      textPadding = '25px 34px 25px';
      fontSize = '28px';
      lineHeight = '34px';
      iconSize = '46px';
      break;
  }

  return { textPadding, fontSize, lineHeight, iconSize };
}

function LargeImage({
  src,
  color,
  text,
  action,
  dropShadow: _dropShadow,
  size = 'l',
  subtext,
  height,
  rounded = true,
  constantHeight = false,
  ...props
} = {}) {
  const dropShadow = _dropShadow !== false;
  let textSizing = {};

  if (typeof size === 'string') {
    textSizing = getTextSizing(size);
  } else if (typeof size === 'object') {
    Object.keys(size).forEach(key => {
      const tempTextSizing = getTextSizing(size[key]);

      Object.keys(tempTextSizing).forEach(sizeKey => {
        if (!(sizeKey in textSizing)) {
          textSizing[sizeKey] = {};
        }

        textSizing[sizeKey][key] = tempTextSizing[sizeKey];
      });
    });
  }

  const { textPadding, fontSize, lineHeight, iconSize } = textSizing;
  const staticHeight =
    constantHeight || (!!height && typeof height !== 'string');

  return (
    <Styled
      onClick={action ? action : null}
      height={height}
      rounded={rounded}
      {...props}
      backgroundSrc={src}
    >
      <StyledImage
        staticHeight={staticHeight}
        src={src}
        rounded={rounded}
        dropShadow={dropShadow}
      />
      <TextContainer staticHeight={staticHeight} padding={textPadding}>
        {text && (
          <Heading
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight="700"
            display="flex"
            justifyContent="space-between"
            width="100%"
            rounded={rounded}
          >
            <span style={{ marginRight: '36px' }}>{text}</span>
            {action && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={iconSize}
                minWidth={iconSize}
                height={iconSize}
              >
                <ArrowCircleRight
                  style={{ float: 'right', width: '100%', height: '100%' }}
                  color={color}
                />
              </Box>
            )}
          </Heading>
        )}
        {subtext && (
          <Heading
            color={color}
            lineHeight={lineHeight}
            fontWeight="700"
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <span style={{ marginRight: '36px' }}>{subtext}</span>
          </Heading>
        )}
      </TextContainer>
    </Styled>
  );
}

LargeImage.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.func,
  size: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(['s', 'm', 'l']),
  ]),
};

export default LargeImage;
