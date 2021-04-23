import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from 'ui-kit';
import { ContentLayout, Share } from 'components';

import EventGroupings from './EventGroupings';

function EventSingle(props = {}) {
  return (
    <ContentLayout
      mode={props.data.mode}
      title={props.data.title}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share title={props.data.title} shareTitle="Invite" />
        </Box>
      )}
      htmlContent={props.data.htmlContent}
      features={props?.data?.featureFeed?.features}
      contentTitleE="Schedule"
      renderContentE={() => props.data && <EventGroupings data={props.data} />}
    />
  );
}

EventSingle.propTypes = {};

export default EventSingle;
