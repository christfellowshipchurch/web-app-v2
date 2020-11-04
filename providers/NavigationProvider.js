import React from 'react';
import PropTypes from 'prop-types';

import { useWebsiteNavigation } from '../hooks';

function NavigationProvider({ Component, ...props }) {
  const { navigation } = useWebsiteNavigation({
    variables: {
      website: process.env.NEXT_PUBLIC_WEBSITE_KEY,
    },
  });

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
