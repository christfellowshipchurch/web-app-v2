import React from 'react';
import PropTypes from 'prop-types';

import { useGroupPreferences } from 'hooks';

function CommunityProvider({ Component, options, ...props }) {
  const { loading, error, preferences } = useGroupPreferences(options);
  return (
    <Component data={preferences} loading={loading} error={error} {...props} />
  );
}

CommunityProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default CommunityProvider;
