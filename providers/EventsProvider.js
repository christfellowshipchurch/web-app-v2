import React from 'react';
import PropTypes from 'prop-types';

import { useEvents } from 'hooks';

function EventsProvider({ Component, options, ...props }) {
  const { loading, error, events } = useEvents(options);
  return <Component data={events} loading={loading} error={error} {...props} />;
}

EventsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default EventsProvider;
