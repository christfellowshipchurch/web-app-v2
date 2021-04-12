import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Image, theme } from 'ui-kit';

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
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box position="relative" onClick={onClick} {...props}>
      <Image
        src={src}
        objectFit="cover"
        width="100%"
        borderRadius={borderRadius}
        onMouseEnter={() => setHovered(true)}
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
