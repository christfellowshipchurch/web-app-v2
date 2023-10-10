import React from 'react';

import { ModalProvider } from 'providers';
import { ModalManager } from 'providers/ModalProvider';
import modals from 'config/modals';
import { GlobalStyles, ThemeProvider } from 'ui-kit';

const withTheme = story => (
  <ThemeProvider>
    <ModalProvider modals={modals}>
      <GlobalStyles />
      {story()}
      <ModalManager />
    </ModalProvider>
  </ThemeProvider>
);

export const decorators = [withTheme];
