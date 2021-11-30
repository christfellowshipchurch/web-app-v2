import React from 'react';
import PropTypes from 'prop-types';

import DefaultHeader from './DefaultHeader';
import TransparentHeader from './TransparentHeader';

const Header = ({ type }) => {
  switch (type) {
    case 'transparent':
      return <TransparentHeader />;
    default:
      return <DefaultHeader />;
  }
};

Header.propTypes = {
  type: PropTypes.oneOf(['transparent']),
};
Header.defaultProps = {};

export default Header;
