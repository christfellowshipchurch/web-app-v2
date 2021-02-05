import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Image, theme } from 'ui-kit';

export default function Photo({
  src,
  overlay,
  inner,
  hover,
  borderRadius = theme.radii.image,
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box position="relative">
      <Image
        src={src}
        objectFit="cover"
        width="100%"
        borderRadius={borderRadius}
        onMouseEnter={() => setHovered(true)}
        {...props}
      />
      {overlay && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display={!hover || hovered ? 'flex' : 'none'}
          alignItems="center"
          justifyContent="center"
          backgroundColor={overlay.color}
          opacity={overlay.opacity}
          borderRadius={borderRadius}
          onMouseLeave={() => setHovered(false)}
        />
      )}
      {inner && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          style={{ transform: 'translate(-50%, -50%)' }}
          width="100%"
          height="100%"
          display={!hover || hovered ? 'flex' : 'none'}
          alignItems="center"
          justifyContent="center"
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
};
