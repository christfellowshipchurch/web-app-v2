import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Box, GlobalStyles, theme } from '../ui-kit';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));
