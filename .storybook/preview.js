import React from 'react';

import { AppProvider } from 'providers';
import { ModalManager } from 'providers/ModalProvider';
import modals from 'config/modals';
import { GlobalStyles } from 'ui-kit';

const withTheme = story => (
  <AppProvider>
    <GlobalStyles />
    {story()}
    <ModalManager />
  </AppProvider>
);

export const decorators = [withTheme];
