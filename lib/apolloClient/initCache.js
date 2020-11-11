import { InMemoryCache } from '@apollo/client/core';
import { persistCache } from 'apollo3-cache-persist';

import fragmentTypes from './fragmentTypes.json';
import introspectionToPossibleTypes from './introspectionToPossibleTypes';

const initCache = initialState => {
  const cache = new InMemoryCache({
    possibleTypes: introspectionToPossibleTypes(fragmentTypes),
  }).restore(initialState || {});

  if (typeof window !== 'undefined') {
    persistCache({
      cache,
      storage: window.localStorage,
    });
  }

  return cache;
};

export default initCache;
