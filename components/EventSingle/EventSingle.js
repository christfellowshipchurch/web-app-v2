import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'ui-kit';
import { ContentLayout, Share } from 'components';

import EventGroupings from './EventGroupings';

function EventSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => <Share title={props.data.title} shareTitle="Invite" />}
      htmlContent={props.data.htmlContent}
      renderContentE={() => props.data && <EventGroupings data={props.data} />}
    />
  );
}

EventSingle.propTypes = {
  data: PropTypes.object,
};

export default EventSingle;
