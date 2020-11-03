import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Box, GlobalStyles, theme } from '../ui-kit';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
