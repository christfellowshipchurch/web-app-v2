import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import get from 'lodash/get';

export const GET_PREFERENCES = gql`
  query getPreferences {
    allPreferences {
      ...preferencesFragment
    }
  }

  fragment preferencesFragment on GroupPreference {
    id
    title
    summary
    coverImage {
      sources {
        uri
      }
    }
    routing {
      pathname
    }
  }
`;

export const GET_SUB_PREFERENCES = gql`
  query getSubPreferences {
    allSubPreferences {
      ...subPreferencesFragment
    }
  }

  fragment subPreferencesFragment on GroupPreference {
    id
    title
    coverImage {
      sources {
        uri
      }
    }
  }
`;

function useGroupPreferences(props = {}) {
  const { preferencePath = null, ...options } = props;
  const [preference, setPreference] = useState(null);

  const queryPreferences = useQuery(GET_PREFERENCES, options);
  const querySubPreferences = useQuery(GET_SUB_PREFERENCES, options);

  const preferences = queryPreferences?.data?.allPreferences || [];

  console.log({ preferencePath });

  useEffect(() => {
    if (preferencePath && preferences) {
      setPreference(
        find(
          preferences,
          n => get(n, 'routing.pathname', '') === preferencePath
        )
      );
    }
  }, [queryPreferences]);

  useEffect(() => {
    if (preference && querySubPreferences.refetch) {
      console.log('REFETCH');
    }
  }, [preference]);

  return {
    preference,
    preferences,
    subPreferences: querySubPreferences?.data?.allSubPreferences || [],
    loading: queryPreferences?.loading || querySubPreferences?.loading,
  };
}

export default useGroupPreferences;
