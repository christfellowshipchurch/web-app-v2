import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Image, theme } from 'ui-kit';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  ${props => props.dropShadow ? 'filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));' : ''}
`;

export default function Photo({
  src,
  overlay,
  inner,
  hover,
  borderRadius = theme.radii.image,
  alignItems = 'center',
  justifyContent = 'center',
  onClick = () => {},
  imageProps = {},
  dropShadow = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box position="relative" onClick={onClick} {...props}>
      <StyledImage
        src={src}
        objectFit="cover"
        width="100%"
        borderRadius={borderRadius}
        onMouseEnter={() => setHovered(true)}
        dropShadow={dropShadow}
        {...imageProps}
      />
      {overlay && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display={!hover || hovered ? 'flex' : 'none'}
          background={overlay.color}
          opacity={overlay.opacity}
          borderRadius={borderRadius}
          onMouseLeave={() => setHovered(false)}
        />
      )}
      {inner && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display={!hover || hovered ? 'flex' : 'none'}
          alignItems={alignItems}
          justifyContent={justifyContent}
          px="l"
          onMouseLeave={() => setHovered(false)}
        >
          {inner}
        </Box>
      )}
    </Box>
  );
}

Photo.propTypes = {
  src: PropTypes.string,
  overlay: PropTypes.object,
  inner: PropTypes.node,
  hover: PropTypes.bool,
  onClick: PropTypes.func,
  imageProps: PropTypes.object,
};
