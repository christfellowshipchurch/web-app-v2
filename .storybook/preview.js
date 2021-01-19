import React from 'react';
import { addDecorator } from '@storybook/react';

import { ModalProvider } from 'providers';
import { ModalManager } from 'providers/ModalProvider';
import modals from 'config/modals';
import { Box, GlobalStyles, ThemeProvider } from 'ui-kit';

addDecorator(story => (
  <ThemeProvider>
    <ModalProvider modals={modals}>
      <GlobalStyles />
      {story()}
      <ModalManager />
    </ModalProvider>
  </ThemeProvider>
));
