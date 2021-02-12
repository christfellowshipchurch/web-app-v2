import { InMemoryCache } from '@apollo/client/core';
import { persistCache } from 'apollo3-cache-persist';

import fragmentTypes from './fragmentTypes.json';
import introspectionToPossibleTypes from './introspectionToPossibleTypes';

const initCache = initialState => {
  const cache = new InMemoryCache({
    possibleTypes: introspectionToPossibleTypes(fragmentTypes),
    typePolicies: {
      Query: {
        fields: {
          // Merge results when loading more group search results
          searchGroups: {
            // Make sure to separate search queries results when filters change
            keyArgs: ['query'],
            merge(existing, incoming) {
              if (!existing) {
                return incoming;
              }

              return {
                ...existing,
                totalResults: incoming.totalResults,
                pageInfo: incoming.pageInfo,
                edges: existing.edges.concat(incoming.edges),
              };
            },
          },
        },
      },
    },
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
