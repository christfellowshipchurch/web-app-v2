import { gql, useQuery } from '@apollo/client';

export const GET_PREFERENCES = gql`
  query getPreferences {
    allPreferences {
      ...preferencesFragment
    }
  }
  fragment preferencesFragment on Preference {
    id
    title
    summary
    coverImage {
      sources {
        uri
      }
    }
    url
  }
`;

export const GET_SUB_PREFERENCES = gql`
  query getSubPreferences {
    allSubPreferences {
      ...subPreferencesFragment
    }
  }
  fragment subPreferencesFragment on SubPreference {
    id
    title
    coverImage {
      sources {
        uri
      }
    }
  }
`;

function usePreferences(options = {}) {
  const queryPreferences = useQuery(GET_PREFERENCES, options);
  const querySubPreferences = useQuery(GET_SUB_PREFERENCES, options);
  return {
    preferences: queryPreferences?.data?.allPreferences || [],
    subpreferences: querySubPreferences?.data?.allSubPreferences || [],
    ...queryPreferences,
    ...querySubPreferences,
  };
}

export default usePreferences;
