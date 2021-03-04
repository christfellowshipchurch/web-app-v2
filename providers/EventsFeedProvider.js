import React from 'react';
import PropTypes from 'prop-types';

import { useEventsFeedFeatures } from 'hooks';

function EventsFeedProvider({ Component, options, ...props }) {
  const { loading, error, eventsFeatures } = useEventsFeedFeatures(options);
  return (
    <Component
      data={eventsFeatures}
      loading={loading}
      error={error}
      {...props}
    />
  );
}

EventsFeedProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default EventsFeedProvider;
