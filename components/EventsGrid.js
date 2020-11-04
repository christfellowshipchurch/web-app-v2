import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardGrid } from '../ui-kit';

function EventsGrid(props = {}) {
  return (
    <CardGrid>
      {props.data.map(event => (
        <Card
          key={event.id}
          coverImage={event?.coverImage?.sources[0]?.uri}
          title={event.title}
          description={event.summary}
        />
      ))}
    </CardGrid>
  );
}

EventsGrid.propTypes = {
  data: PropTypes.object,
};

export default EventsGrid;
