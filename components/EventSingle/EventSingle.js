import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'ui-kit';
import { ContentLayout } from 'components';

import EventGroupings from './EventGroupings';

function EventSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => <Button variant="secondary">Invite</Button>}
      contentTitleD="About"
      htmlContent={props.data.htmlContent}
      contentTitleE="Schedule"
      renderContentE={() => <EventGroupings data={props.data} />}
    />
  );
}

EventSingle.propTypes = {
  data: PropTypes.object,
};

export default EventSingle;
