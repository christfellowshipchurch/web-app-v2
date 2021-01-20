import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';

function Logo({ withText, dark, ...props } = {}) {
  const color = dark ? 'neutrals.100' : 'primary';
  const textColor = dark ? 'neutrals.100' : 'black';
  const opacity = dark ? '33%' : '100%';
  return withText ? (
    <Box>
      <Icon
        name="logo"
        alt="Long Hollow"
        viewBox="0 0 78 78"
        width="42px"
        height="42px"
        color={color}
        opacity={opacity}
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
        opacity={opacity}
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
      opacity={opacity}
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
