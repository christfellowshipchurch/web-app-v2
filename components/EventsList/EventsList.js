import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { DefaultCard, CardGrid } from 'ui-kit';
import { CustomLink } from 'components';

function EventsList(props = {}) {
  console.log('data', props.data);
  return (
    <CardGrid>
      {props.data.map(event => (
        <CustomLink
          as="a"
          key={event.id}
          href={`/events/${slugify(event.title)}`}
          Component={DefaultCard}
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
