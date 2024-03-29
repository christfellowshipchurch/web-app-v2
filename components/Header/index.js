import React from 'react';
import PropTypes from 'prop-types';

import DefaultHeader from './DefaultHeader';
import TransparentHeader from './TransparentHeader';

import navData from 'config/new-nav-links';

/**
 * ! ----- WARNING ----- !
 * This component must NOT be used by itself. It can only be used with the Layout component, due to the MobileNavScreen needing to render outside it's parent.
 */

const Header = ({ type, showMobileNav }) => {
  switch (type) {
    case 'transparent':
      return <TransparentHeader data={navData} showMobileNav={showMobileNav} />;
    case 'default ':
    default:
      return <DefaultHeader data={navData} showMobileNav={showMobileNav} />;
  }
};

Header.propTypes = {
  type: PropTypes.oneOf(['transparent', 'default']),
};
Header.defaultProps = {
  type: 'default',
};

export default Header;
