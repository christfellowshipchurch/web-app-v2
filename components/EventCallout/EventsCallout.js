import React from 'react';
import { Box, Text } from 'ui-kit';
import PropTypes from 'prop-types';

function EventsCallout({ icon, title, ...props } = {}) {
  return (
    <Box bg="white" p="m" borderRadius="image">
      <Box display="flex" alignItems="center" mb="m">
        {icon}
        <Text color="neutrals.900" opacity="60%" variant="h4" fontWeight="600">
          {title}
        </Text>
      </Box>
      {props.children}
    </Box>
  );
}

EventsCallout.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default EventsCallout;
