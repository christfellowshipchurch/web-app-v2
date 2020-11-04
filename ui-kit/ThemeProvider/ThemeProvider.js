import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import {
  GlobalStyles as DefaultGlobalStyles,
  theme as defaultTheme,
} from '../';

function ThemeProvider(props = {}) {
  return (
    <SCThemeProvider theme={props.theme}>
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
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
};

export default ThemeProvider;
