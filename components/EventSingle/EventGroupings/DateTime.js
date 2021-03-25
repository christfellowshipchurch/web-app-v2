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
    <>
      <Box>
        <Box as="h3">
          <Icon name="calendar-alt" />
          {format(new Date(start), 'eee LLL d')}
        </Box>

        <Box as="p">
          <Icon name="clock" />
          {format(new Date(start), 'p')}
        </Box>
      </Box>
      <AddToCalendar title={null} event={event} mb="base">
        <Icon name="calendar-plus" />
      </AddToCalendar>
    </>
  );
};

DateTime.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  title: PropTypes.string,
  group: PropTypes.string,
};

export default DateTime;
