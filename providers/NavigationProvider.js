import React from 'react';
import PropTypes from 'prop-types';

import navigation from 'config/navigation';
import { useLiveStreams } from 'hooks';

function NavigationProvider({ Component, ...props }) {
  const liveStreams = useLiveStreams();

  return <Component data={navigation} callData={{liveStreams}} {...props} />;
}

NavigationProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default NavigationProvider;
