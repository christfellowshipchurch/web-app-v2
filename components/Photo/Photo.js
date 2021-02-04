import PropTypes from 'prop-types';
import { Box, CardGrid, Heading, Image, Text, theme } from 'ui-kit';

export default function Photo({
  images = [],
  title,
  description,
  fullWidth,
  titleProps,
  descriptionProps,
  ...props
}) {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <CardGrid
        columns={fullWidth ? 1 : images.length > 1 ? 2 : 1}
        gridColumnGap="l"
        gridRowGap="l"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        {images.map(
          (
            { inner, overlay, borderRadius = theme.radii.image, ...imageProps },
            i
          ) => (
            <Box position="relative" key={i}>
              <Image
                objectFit="cover"
                width="100%"
                borderRadius={borderRadius}
                {...imageProps}
              />
              {overlay && (
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor={overlay.color}
                  opacity={overlay.opacity}
                  borderRadius={borderRadius}
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
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="l"
                >
                  {inner}
                </Box>
              )}
            </Box>
          )
        )}
      </CardGrid>
      {title && (
        <Heading mt="l" variant="h2" color="neutrals.900" fontWeight="800">
          {title}
        </Heading>
      )}
      {description && (
        <Text mt="xs" variant="h4" color="neutrals.900" opacity="60%">
          {description}
        </Text>
      )}
    </Box>
  );
}

Photo.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  fullWidth: PropTypes.bool,
};
