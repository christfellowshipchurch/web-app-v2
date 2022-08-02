import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Box, Icon, Loader } from 'ui-kit';
import { icsLink } from 'components/AddToCalendar/utils';
import { useCampus } from 'hooks';

function DateTime({ start, end, title, campus, ...props }) {
  // Adding custom code to pull in address for each actual campus
  const [campusAddress, setCampusAddress] = useState(
    'Christ Fellowship Church'
  );

  const { campus: eventCampus, loading } = useCampus({
    variables: {
      campusName: campus,
    },
  });

  useEffect(() => {
    async function getCampusAddress() {
      try {
        const { street1, city, state, postalCode } = await eventCampus;
        setCampusAddress(
          [street1, city, state, postalCode.substring(0, 5)].join(', ')
        );
      } catch (error) {
        setCampusAddress('Christ Fellowship Church');
      }
    }
    getCampusAddress();
  }, [eventCampus]);

  const event = {
    title: `${title} - ${campus}`,
    address: campusAddress,
    description: 'Come join us!',
    startTime: start,
    endTime: end,
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      {loading ? (
        <Loader />
      ) : (
        <Box>
          <Box display="flex" alignItems="center" mb="xs">
            <Icon name="calendar" mr="s" size="20" />
            <Box as="h3" m={0}>
              {format(new Date(start), 'eee LLL d')}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" color="neutrals.800">
            <Icon name="clock" mr="s" size="20" />
            <Box as="p" m={0}>
              {format(new Date(start), 'p')}
            </Box>
          </Box>
        </Box>
      )}
      {/* We are temporarily using ICS only for the time being, until we fix the AddToCalendar component */}
      <Box as="a" download="ChristFellowshipChurch.ics" href={icsLink(event)}>
        <Icon name="calendar-plus" />
      </Box>
    </Box>
  );
}

DateTime.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  title: PropTypes.string,
};

export default DateTime;
