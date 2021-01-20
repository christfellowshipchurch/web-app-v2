import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';

function Logo({ withText, dark, ...props } = {}) {
  const color = dark ? 'logoDark' : 'primary';
  const textColor = dark ? 'logoDark' : 'black';
  return withText ? (
    <Box>
      <Icon
        name="logo"
        alt="Long Hollow"
        viewBox="0 0 78 78"
        width="42px"
        height="42px"
        color={color}
        {...props}
      />
      <Icon
        name="logoText"
        alt="Long Hollow Baptist Church"
        viewBox="0 0 260 36"
        width="140px"
        height="42px"
        ml="20px"
        color={textColor}
        {...props}
      />
    </Box>
  ) : (
    <Icon
      name="logo"
      alt="Long Hollow"
      viewBox="0 0 78 78"
      width="42px"
      height="42px"
      color={color}
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
