import PropTypes from 'prop-types';
import { Box, CardGrid, Heading, Image, Text } from 'ui-kit';

export default function Photo({
  srcs = [],
  title,
  description,
  fullWidth,
  titleProps,
  descriptionProps,
  imageProps = {},
  ...props
}) {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      <CardGrid
        columns={fullWidth ? 1 : srcs.length > 1 ? 2 : 1}
        gridColumnGap="l"
        gridRowGap="l"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        mb="l"
      >
        {srcs.map((src, i) => (
          <Image
            src={src}
            key={i}
            rounded
            objectFit="cover"
            width="100%"
            {...imageProps}
          />
        ))}
      </CardGrid>
      {title && (
        <Heading mb="xs" variant="h2" color="neutrals.900" fontWeight="800">
          {title}
        </Heading>
      )}
      {description && (
        <Text variant="h4" color="neutrals.900" opacity="60%">
          {description}
        </Text>
      )}
    </Box>
  );
}

Photo.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  imageProps: PropTypes.object,
  fullWidth: PropTypes.bool,
};
