import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'ui-kit';
import { ContentLayout } from 'components';

import EventGroupings from './EventGroupings';

function EventSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Button variant="secondary">Invite</Button>
        </Box>
      )}
      htmlContent={props.data.htmlContent}
      renderContentE={() => props.data && <EventGroupings data={props.data} />}
    />
  );
}

EventSingle.propTypes = {
  data: PropTypes.object,
};

export default EventSingle;
