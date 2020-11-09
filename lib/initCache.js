import { InMemoryCache } from '@apollo/client/core';
import { persistCache } from 'apollo3-cache-persist';

const initCache = initialState => {
  const cache = new InMemoryCache().restore(initialState || {});

  if (typeof window !== 'undefined') {
    persistCache({
      cache,
      storage: window.localStorage,
    });
  }

  return cache;
};

export default initCache;
