import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { slugify } from '../utils';
import { Card, CardGrid } from '../ui-kit';

function EventsGrid(props = {}) {
  return (
    <CardGrid>
      {props.data.map(event => (
        <Link key={event.id} href={`/events/${slugify(event.title)}`}>
          <Card
            as="a"
            coverImage={event?.coverImage?.sources[0]?.uri}
            title={event.title}
            description={event.summary}
          />
        </Link>
      ))}
    </CardGrid>
  );
}

EventsGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default EventsGrid;
