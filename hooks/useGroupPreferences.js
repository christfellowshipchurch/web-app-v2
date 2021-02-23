import { gql, useQuery } from '@apollo/client';

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
    url
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

function useGroupPreferences(options = {}) {
  const queryPreferences = useQuery(GET_PREFERENCES, options);
  const querySubPreferences = useQuery(GET_SUB_PREFERENCES, options);
  return {
    preferences: queryPreferences?.data?.allPreferences || [],
    subPreferences: querySubPreferences?.data?.allSubPreferences || [],
    loading: queryPreferences?.loading || querySubPreferences?.loading,
  };
}

export default useGroupPreferences;
