import React from 'react';
import PropTypes from 'prop-types';

import { useCurrentUser } from '../hooks';

function CurrentUserProvider({ Component, ...props }) {
  const { loading, error, currentUser } = useCurrentUser();
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
};

export default CurrentUserProvider;
