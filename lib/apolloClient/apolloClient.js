import { useMemo } from 'react';
import { ApolloClient } from '@apollo/client';

import authLink from './authLink';
import httpLink from './httpLink';
import initCache from './initCache';

let apolloClient;

function createApolloClient() {
  const cache = initCache();

  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache,
    version: '5.4.0',
  });

  // For local dev, expose the apolloClient in console by attaching
  // it to the`window`. Mainly for quick-access to cache clear methods:
  // --> client.cache.reset()
  // --> client.clearStore()
  // @see https://www.apollographql.com/docs/react/caching/advanced-topics/#resetting-the-store
  const isLocalClient =
    typeof window !== 'undefined' && window.location.port === '3000';

  if (isLocalClient) {
    window.apolloClient = client;
  }

  client.onResetStore(() => cache.writeData({ data: {} }));

  return client;
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here.
  if (initialState) {
    // Get existing cache, loaded during client side data fetching.
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data.
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client.
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
