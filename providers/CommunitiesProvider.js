import React from 'react';
import PropTypes from 'prop-types';

import { useGroupPreferences } from 'hooks';

function CommunitiesProvider({ Component, options, ...props }) {
  const { loading, error, preferences } = useGroupPreferences(options);
  return (
    <Component data={preferences} loading={loading} error={error} {...props} />
  );
}

CommunitiesProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default CommunitiesProvider;
