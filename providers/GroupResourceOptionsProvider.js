import React from 'react';
import PropTypes from 'prop-types';

function GroupResourceOptionsProvider({ Component, options, ...props }) {
  return <Component {...props} />;
}

GroupResourceOptionsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupResourceOptionsProvider;
