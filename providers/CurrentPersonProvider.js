import React from 'react';
import PropTypes from 'prop-types';

import { useCurrentPerson } from '../hooks';

function CurrentPersonProvider({ Component, options, ...props }) {
  const { loading, error, currentPerson } = useCurrentPerson(options);
  return (
    <Component
      loading={loading}
      error={error}
      currentPerson={currentPerson}
      {...props}
    />
  );
}

CurrentPersonProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default CurrentPersonProvider;
