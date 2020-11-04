import React from 'react';
import PropTypes from 'prop-types';

import { useEvent } from '../hooks';

function EventProvider({ Component, title, ...props }) {
  const { event } = useEvent({ variables: { title } });
  return <Component data={event} {...props} />;
}

EventProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  title: PropTypes.string.isRequired,
};

export default EventProvider;
