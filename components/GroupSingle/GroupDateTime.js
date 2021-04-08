import React from 'react';
import PropTypes from 'prop-types';

import { dateTextFormat } from 'utils';
import { Box, Card } from 'ui-kit';
import { AddToCalendar } from 'components';

const GroupDateTime = ({
  title,
  summary,
  address,
  dateTime,
  videoCall,
  parentVideoCall,
}) => {
  if (!dateTime) {
    return null;
  }

  const getNotes = () => {
    const hasParentVideoCall = Boolean(parentVideoCall?.link);
    const hasVideoCall = Boolean(videoCall?.link);

    if (!hasParentVideoCall && !hasVideoCall) return null;

    const videoCallNote = videoCall?.link || '';
    const parentVideoCallNote = parentVideoCall?.link || '';
    const notes = `${
      hasParentVideoCall ? `Join Zoom Meeting:\n${parentVideoCallNote}\n\n` : ''
    }Join Zoom ${
      hasParentVideoCall ? 'Breakout' : ''
    }Meeting:\n${videoCallNote}`;

    return notes.trim();
  };
  const notes = getNotes();

  return (
    <Card
      boxShadow="base"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      mb="base"
      p={{ _: 's', md: 'base' }}
    >
      <Box as="h5" color="subdued">
        NEXT MEETING
      </Box>
      <Box as="h3" mb="base">
        {dateTextFormat(dateTime?.start)}
      </Box>

      <AddToCalendar
        event={{
          title,
          summary,
          // Location is the webUrl for now because we have multiple potential video calls endpoints
          address,
          startTime: dateTime.start,
          endTime: dateTime.end,
          description: notes,
        }}
        alternateDescription={notes}
        label={true}
      />
    </Card>
  );
};

GroupDateTime.propTypes = {
  dateTime: PropTypes.shape({
    end: PropTypes.string,
    start: PropTypes.string,
  }),
  address: PropTypes.string,
  summary: PropTypes.string,
  title: PropTypes.string.isRequired,
  calendarLinkDescription: PropTypes.string,
};

export default GroupDateTime;
