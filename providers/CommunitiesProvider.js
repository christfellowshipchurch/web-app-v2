import React from 'react';
import PropTypes from 'prop-types';

import { useCommunities } from 'hooks';

function CommunitiesProvider({ Component, options, ...props }) {
  const { loading, error, communities } = useCommunities(options);
  return (
    <Component data={communities} loading={loading} error={error} {...props} />
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
