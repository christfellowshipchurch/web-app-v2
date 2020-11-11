import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from '../../utils';
import { Card, CardGrid } from '../../ui-kit';
import { CustomLink } from '../';

function EventsList(props = {}) {
  return (
    <CardGrid>
      {props.data.map(event => (
        <CustomLink
          as="a"
          key={event.id}
          href={`/events/${slugify(event.title)}`}
          Component={Card}
          coverImage={event?.coverImage?.sources[0]?.uri}
          title={event.title}
          description={event.summary}
        />
      ))}
    </CardGrid>
  );
}

EventsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default EventsList;
