import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';

function Logo({ withText, ...props } = {}) {
  return withText ? (
    <Box>
      <Icon
        name="logo"
        alt="Long Hollow"
        viewBox="0 0 78 78"
        width="78px"
        height="78px"
        color="primary"
        {...props}
      />
      <Icon
        name="logoText"
        alt="Long Hollow Baptist Church"
        viewBox="0 0 260 36"
        width="260px"
        height="36px"
        ml="20px"
        color="black"
        {...props}
      />
    </Box>
  ) : (
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
  withText: PropTypes.bool,
};

Logo.defaultProps = {
  withText: false,
};

export default Logo;
