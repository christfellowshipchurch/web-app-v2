import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import camelCase from 'lodash/camelCase';

import { icons, systemPropTypes, theme } from 'ui-kit';
import Styled from './Icon.styles';

const DEFAULT_ICON_SIZE = 24;
const DEFAULT_ICON_NAME = 'circle';

function Icon({ color, height, name, size, width, ...rest }) {
  const newWidth = size || width || DEFAULT_ICON_SIZE;
  const newHeight = size || height || DEFAULT_ICON_SIZE;
  const iconName = name || DEFAULT_ICON_NAME;
  const icon = icons[camelCase(iconName)];

  // Render Methods
  const getIconProps = iconProps => {
    let pathProps = {};

    if (typeof iconProps === 'string') {
      pathProps = {
        ...pathProps,
        d: iconProps,
        fill: themeGet(`colors.${color}`)(rest) || 'currentColor',
      };
    }

    if (typeof iconProps === 'object') {
      pathProps = {
        ...pathProps,
        ...iconProps,
        ...(iconProps.fill
          ? {
              fill: themeGet(`colors.${color}`)(rest) || 'currentColor',
            }
          : { fill: 'none' }),
        ...(iconProps.stroke
          ? {
              stroke: themeGet(`colors.${color}`)(rest) || 'currentColor',
            }
          : { stroke: 'none' }),
      };
    }

    return pathProps;
  };
  const renderIcons = () => {
    if (Array.isArray(icon)) {
      return icon.map((config, i) => {
        const iconProps = getIconProps(config);
        return <path key={i} {...iconProps} />;
      });
    }

    const iconProps = getIconProps(icon);
    return <path {...iconProps} />;
  };

  return (
    <Styled
      as="svg"
      width={newWidth}
      height={newHeight}
      viewBox={`0 0 ${DEFAULT_ICON_SIZE} ${DEFAULT_ICON_SIZE}`}
      {...rest}
    >
      {renderIcons()}
    </Styled>
  );
}

Icon.propTypes = {
  ...systemPropTypes,
  /**
   * Name of the icon to render.
   */
  name: PropTypes.string.isRequired,
  /**
   * Color of the icon.
   */
  color: PropTypes.string,
  /**
   * Height of the icon.
   */
  height: PropTypes.string,
  /**
   * Size of the icon.
   */
  size: PropTypes.string,
  /**
   * Theme of the icon.
   */
  theme: PropTypes.object,
  /**
   * Width of the icon.
   */
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
