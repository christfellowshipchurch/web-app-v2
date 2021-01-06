import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import {
  GlobalStyles as DefaultGlobalStyles,
  theme as defaultTheme,
} from 'ui-kit';

const DEFAULT_MODE = 'light';

function ThemeProvider(props = {}) {
  const theme = {
    ...props.theme,
    colors: props.theme.colors[props.mode],
  };

  return (
    <SCThemeProvider theme={theme}>
      <>
        {props.children}
        {props.renderGlobalStyles ? (
          props.renderGlobalStyles()
        ) : (
          <DefaultGlobalStyles />
        )}
      </>
    </SCThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  renderGlobalStyles: PropTypes.func,
  theme: PropTypes.object,
  mode: PropTypes.oneOf(['light', 'dark']),
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
  mode: DEFAULT_MODE,
};

export default ThemeProvider;
