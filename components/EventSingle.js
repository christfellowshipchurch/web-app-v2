import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card } from '../ui-kit';

function EventSingle(props = {}) {
  const event = props.data;

  function createMarkup(string) {
    return { __html: string };
  }

  return (
    <>
      <Card
        coverImage={event?.coverImage?.sources[0]?.uri}
        coverImageOverlay={true}
        coverImageTitle={event.title}
        coverImageDescription={event.summary}
        height="596px"
        mb="xl"
      />
      <Card p="l">
        <Box as="h2">About {event.title}</Box>
        <Box dangerouslySetInnerHTML={createMarkup(event.htmlContent)} />
      </Card>
    </>
  );
}

EventSingle.propTypes = {
  data: PropTypes.object,
};

export default EventSingle;
