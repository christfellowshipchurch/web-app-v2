import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import ModalProvider, { ModalManager } from '../providers/ModalProvider';
import { useApollo } from '../config/apolloClient';
import modals from '../config/modals';
import { ThemeProvider } from '../ui-kit';

function AppProvider(props = {}) {
  const apolloClient = useApollo(props.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <ModalProvider modals={modals}>
          {props.children}
          <ModalManager />
        </ModalProvider>
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
