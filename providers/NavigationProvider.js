import React from 'react';
import PropTypes from 'prop-types';

import navigation from '../config/navigation';

function NavigationProvider({ Component, ...props }) {
  return <Component data={navigation} {...props} />;
}

NavigationProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default NavigationProvider;
