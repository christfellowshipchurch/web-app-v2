import React from 'react';
import { Box, Image, Text } from 'ui-kit';
import PropTypes from 'prop-types';

function EventCallout({
  title,
  description,
  imageSrc,
  onClick,
  ...props
} = {}) {
  return (
    <Box
      mt="s"
      display="flex"
      alignItems="center"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'initial' }}
      {...props}
    >
      <Image
        mr="s"
        height="60px"
        width="60px"
        src={imageSrc}
        rounded="xl"
        bg="neutrals.300"
        style={{ objectFit: 'cover' }}
      />
      <Box display="flex" flexDirection="column">
        <Text color="neutrals.900" fontWeight="700">
          {title}
        </Text>
        <Text color="neutrals.900" fontWeight="400">
          {description}
        </Text>
      </Box>
    </Box>
  );
}

EventCallout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default EventCallout;
