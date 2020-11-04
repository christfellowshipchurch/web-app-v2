import React from 'react';
import PropTypes from 'prop-types';

import { useEvents } from '../hooks';

function EventsProvider({ Component, ...props }) {
  const { events } = useEvents();
  return <Component data={events} {...props} />;
}

EventsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default EventsProvider;
