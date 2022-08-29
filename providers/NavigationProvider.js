import React from 'react';
import PropTypes from 'prop-types';

import navigation from 'config/navigation';
import newNav from 'config/new-nav-links';

function NavigationProvider({ Component, ...props }) {
  return <Component data={props?.new ? newNav : navigation} {...props} />;
}

NavigationProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default NavigationProvider;
