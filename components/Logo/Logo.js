import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import LogoSVG from './LogoSVG';

function Logo({ withText, width, dark, ...props } = {}) {
  const color = dark ? '#6B6C71' : null;
  const opacity = dark ? '100%' : '100%';
  return (
    <Box display="flex" alignItems="center" {...props}>
      <LogoSVG
        opacity={opacity}
        width={width || (withText && '182px') || '46px'}
        alt="Long Hollow Church"
        treeColor={color}
        withText={withText}
      />
    </Box>
  );
}

Logo.propTypes = {
  withText: PropTypes.bool,
};

Logo.defaultProps = {
  withText: false,
};

export default Logo;
