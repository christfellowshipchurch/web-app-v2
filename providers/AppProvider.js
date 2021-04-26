import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apolloClient';
import { AuthProvider, ModalProvider } from 'providers';
import { ModalManager } from 'providers/ModalProvider';
import TrackPageViewProvider from 'providers/TrackPageViewProvider';
import modals from 'config/modals';
import { ThemeProvider } from 'ui-kit';

function AppProvider(props = {}) {
  const apolloClient = useApollo(props.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <AuthProvider>
          <ModalProvider modals={modals}>
            <TrackPageViewProvider>
            {props.children}
            </TrackPageViewProvider>
            <ModalManager />
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  initialApolloState: PropTypes.object,
};

export default AppProvider;
