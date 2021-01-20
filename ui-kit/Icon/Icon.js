import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { icons, systemPropTypes, theme } from 'ui-kit';
import Styled from './Icon.styles';

const DEFAULT_ICON_SIZE = 24;
const DEFAULT_ICON_NAME = 'circle';

function Icon({
  stroke,
  fill,
  strokeWidth,
  height,
  name,
  size,
  width,
  ...rest
}) {
  const newWidth = size || width || DEFAULT_ICON_SIZE;
  const newHeight = size || height || DEFAULT_ICON_SIZE;
  const iconName = name || DEFAULT_ICON_NAME;
  const icon = icons[iconName];
  const strokeColor = themeGet(`colors.${stroke}`)(rest) || 'transparent';
  const fillColor = themeGet(`colors.${fill}`)(rest) || 'transparent';

  return (
    <Styled
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
            stroke={strokeColor}
            fill={fillColor}
            strokeWidth={strokeWidth}
          />
        ))
      ) : (
        <path
          d={icon}
          stroke={strokeColor}
          fill={fillColor}
          strokeWidth={strokeWidth}
        />
      )}
    </Styled>
  );
}

Icon.propTypes = {
  ...systemPropTypes,
  name: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.number,
  height: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.object,
  width: PropTypes.string,
};

Icon.defaultProps = {
  height: null,
  size: null,
  theme,
  width: null,
};

Icon.displayName = 'Icon';

export default withTheme(Icon);
