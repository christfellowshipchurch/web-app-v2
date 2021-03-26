import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { AddToCalendar } from 'components';
import { Box, Icon } from 'ui-kit';

const DateTime = ({ start, end, title }) => {
  const event = {
    title: `${title} - Christ Fellowship Church`,
    alternateDescription: `Join us for ${title} at Christ Fellowship!`,
    startTime: start,
    endTime: end,
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Box display="flex" alignItems="center" mb="s">
          <Icon name="calendar" mr="s" />
          <Box as="h3" m={0}>
            {format(new Date(start), 'eee LLL d')}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Icon name="clock" mr="s" />
          <Box as="p" m={0}>
            {format(new Date(start), 'p')}
          </Box>
        </Box>
      </Box>
      <AddToCalendar event={event} mb="base" />
    </Box>
  );
};

DateTime.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  title: PropTypes.string,
};

export default DateTime;
