import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get'
import mapValues from 'lodash/mapValues';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { theme as defaultTheme } from 'ui-kit'

const mergedTheme = (mixin = {}) => (upperTheme) => {
  const colors = mapValues(mixin?.colors, (color, key) => {
    if (!color) {
      const upperThemeValue = get(upperTheme, `colors.${key}`)

      return upperThemeValue
    }

    return color
  })
  const merged = {
    ...upperTheme,
    colors: {
      ...upperTheme.colors,
      ...colors
    }
  }
  
  return merged
}

function ThemeMixin(props = {}) {
  return (
    <SCThemeProvider theme={mergedTheme(props?.theme)}>
      {props.children}
    </SCThemeProvider>
  );
}

ThemeMixin.defaultProps = {
  theme: {},
  children: null
}

ThemeMixin.propTypes = {
  theme: PropTypes.shape({ 
    colors: PropTypes.shape({})
  })
}

export default ThemeMixin;