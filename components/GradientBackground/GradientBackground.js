import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';

import Styled from './GradientBackground.styles';
import { themeGet } from '@styled-system/theme-get';

/**
 * note : This component creates a gradient background and accepts custom color options including a top shade and a bottom shade using the colors from our theme.js
 */

const GradientBackground = (props = {}) => {
  const colors = {
    top: themeGet(`colors.${props?.topShade}`),
    bottom: themeGet(`colors.${props?.bottomShade}`),
  };

  return (
    <Styled {...colors} {...props}>
      {props?.children}
    </Styled>
  );
};

GradientBackground.propTypes = {
  ...systemPropTypes,
  topShade: PropTypes.string,
  bottomShade: PropTypes.string,
};

GradientBackground.defaultProps = {
  topShade: 'white',
  bottomShade: 'neutrals.200',
};

export default GradientBackground;
