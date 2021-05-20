import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import get from 'lodash/get';
import find from 'lodash/find';

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
  query getSubPreferences($preferenceId: ID) {
    allSubPreferences {
      id
      title
      coverImage(nodeId: $preferenceId) {
        sources {
          uri
        }
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
  const subPreferences = querySubPreferences?.data?.allSubPreferences || [];

  // note : If we have a preferencePath specified, that means that we want to be able to filter all preferences for a specific, single preference.
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

  // note : If a preference is specified, refetch the Sub Preferences with the Preference Id so that we can specify the type of cover image we want
  useEffect(() => {
    if (preference && querySubPreferences.refetch) {
      const { refetch } = querySubPreferences;

      refetch({
        preferenceId: preference.id,
      });
    }
  }, [preference]);

  return {
    preference,
    preferences,
    subPreferences,
    loading: queryPreferences?.loading || querySubPreferences?.loading,
  };
}

export default useGroupPreferences;
