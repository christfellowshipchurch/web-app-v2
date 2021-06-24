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
        name="logoTree"
        alt="Long Hollow"
        viewBox="0 0 42 42"
        width="42px"
        height="42px"
        stroke={color}
        fill={color}
        opacity={opacity}
        {...props}
      />
      <Icon
        name="logoText"
        alt="Long Hollow Church"
        viewBox="0 0 260 36"
        width="140px"
        height="42px"
        ml="20px"
        fill={textColor}
        opacity={opacity}
        {...props}
      />
    </Box>
  ) : (
    <Icon
      name="logoTree"
      alt="Long Hollow"
      viewBox="0 0 42 42"
      width="42px"
      height="42px"
      stroke={color}
      fill={color}
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
