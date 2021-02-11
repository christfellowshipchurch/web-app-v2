import { gql, useQuery } from '@apollo/client';

export const GET_GROUP_OPTIONS = gql`
  query getGroupOptions {
    groupSearchOptions {
      day
      preference
      campusName
      subPreference
    }
  }
`;

// NOTE: To be replaced by an API query that combines this data for us
function useGroupFilterOptions(options = {}) {
  const query = useQuery(GET_GROUP_OPTIONS, options);

  return {
    campuses: query?.data?.groupSearchOptions?.campusName || [],
    preferences: query?.data?.groupSearchOptions?.preference || [],
    subPreferences: query?.data?.groupSearchOptions?.subPreference || [],
  };
}

export default useGroupFilterOptions;
