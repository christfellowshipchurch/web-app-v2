import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import icons from '../config/icons';
import theme from '../config/theme';
import { Icon as StyledIcon } from '../styled';

const DEFAULT_ICON_SIZE = 20;
const DEFAULT_ICON_NAME = 'circle';

function Icon({ color, height, name, size, width, ...rest }) {
  const newWidth = size || width || DEFAULT_ICON_SIZE;
  const newHeight = size || height || DEFAULT_ICON_SIZE;
  const iconName = name || DEFAULT_ICON_NAME;
  const icon = icons[iconName];

  return (
    <StyledIcon
      as="svg"
      width={newWidth}
      height={newHeight}
      viewBox={`0 0 ${DEFAULT_ICON_SIZE} ${DEFAULT_ICON_SIZE}`}
      {...rest}
    >
      {Array.isArray(icon) ? (
        icon.map((d, i) => (
          <path
            key={i}
            d={d}
            fill={themeGet(`colors.${color}`)(rest) || 'currentColor'}
          />
        ))
      ) : (
        <path
          d={icon}
          fill={themeGet(`colors.${color}`)(rest) || 'currentColor'}
        />
      )}
    </StyledIcon>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.object,
  width: PropTypes.string,
};

Icon.defaultProps = {
  color: 'currentColor',
  height: null,
  size: null,
  theme,
  width: null,
};

Icon.displayName = 'Icon';

export default withTheme(Icon);
