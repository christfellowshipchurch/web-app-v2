import { gql, useQuery } from '@apollo/client';

export const GET_PREFERENCES = gql`
  query getPreference($preferenceId: ID!) {
    node(id: $preferenceId) {
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
  query getSubPreferencesByPreference($preferenceId: ID) {
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

function useGroupPreference(options = {}) {
  const queryPreference = useQuery(GET_PREFERENCES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });
  const querySubPreferences = useQuery(GET_SUB_PREFERENCES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    preference: queryPreference?.data?.node || {},
    subPreferences: querySubPreferences?.data?.allSubPreferences || [],
    loading: queryPreference?.loading || querySubPreferences?.loading,
  };
}

export default useGroupPreference;
