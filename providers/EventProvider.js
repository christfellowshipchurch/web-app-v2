import React from 'react';
import PropTypes from 'prop-types';

import { useEvent } from 'hooks';

function EventProvider({ Component, options, ...props }) {
  const { loading, error, event } = useEvent(options);
  return <Component data={event} loading={loading} error={error} {...props} />;
}

EventProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default EventProvider;
