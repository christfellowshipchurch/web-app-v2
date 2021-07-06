import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import LogoSVG from './LogoSVG';
import { useTheme } from 'styled-components';

function Logo({ withText, width, dark, ...props } = {}) {
  const theme = useTheme();
  const color = dark ? theme.colors.neutrals['100'] : null;
  const opacity = dark ? '33%' : '100%';
  return (
    <Box>
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
