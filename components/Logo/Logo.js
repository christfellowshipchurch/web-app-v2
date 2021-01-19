import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';

function Logo(props = {}) {
  const filename = `/logo.svg`;
  return (
    <Icon
      name="logo"
      alt="Long Hollow"
      viewBox="0 0 78 78"
      width="78"
      height="78"
      color="primary"
      {...props}
    />
  );
}

Logo.propTypes = {
  dark: PropTypes.bool,
};

Logo.defaultProps = {
  dark: false,
};

export default Logo;
