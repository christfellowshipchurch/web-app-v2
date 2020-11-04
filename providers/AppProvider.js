import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../config/apolloClient';
import { ThemeProvider } from '../ui-kit';

function AppProvider(props = {}) {
  const apolloClient = useApollo(props.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>{props.children}</ThemeProvider>
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
