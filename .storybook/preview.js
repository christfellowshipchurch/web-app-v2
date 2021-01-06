import React from 'react';
import { addDecorator } from '@storybook/react';

import { Box, GlobalStyles, ThemeProvider } from 'ui-kit';

addDecorator(story => (
  <ThemeProvider>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));
