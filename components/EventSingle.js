import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Card, Longform } from '../ui-kit';

function EventSingle(props = {}) {
  const event = props.data;

  function createMarkup(string) {
    return { __html: string };
  }

  return (
    <>
      <Card
        coverImage={event?.coverImage?.sources[0]?.uri}
        height="596px"
        mb="l"
      />
      <Box
        alignItems="center"
        display="grid"
        gridTemplateColumns="70% 30%"
        mb="l"
      >
        <Box>
          <Box as="h1" mb="0">
            {event.title}
          </Box>
          <Box as="p" fontSize="l">
            {event.summary}
          </Box>
        </Box>
        <Box justifySelf="flex-end">
          <Button variant="secondary">Invite others to this event</Button>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="70% 30%" gridColumnGap="l">
        <Box>
          <Box as="h2" fontSize="h3" mb="base">
            About This Event
          </Box>
          <Card boxShadow="base">
            <Longform
              dangerouslySetInnerHTML={createMarkup(event.htmlContent)}
            />
          </Card>
        </Box>
        <Box>
          <Box as="h2" fontSize="h3" mb="base">
            Event Schedule
          </Box>
          <Card boxShadow="base">
            <Box as="p">The schedule will go here&hellip;</Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}

EventSingle.propTypes = {
  data: PropTypes.object,
};

export default EventSingle;
