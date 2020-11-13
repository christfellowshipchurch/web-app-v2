import React from 'react';
import PropTypes from 'prop-types';

import { useCurrentUser } from '../hooks';

function CurrentUserProvider({ Component, options, ...props }) {
  const { loading, error, currentUser } = useCurrentUser(options);
  return (
    <Component
      loading={loading}
      error={error}
      currentUser={currentUser}
      {...props}
    />
  );
}

CurrentUserProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default CurrentUserProvider;
