import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export const GET_GROUP_OPTIONS = gql`
  query getGroupOptions {
    groupSearchOptions {
      day
      preference
      campusName
      subPreference
      meetingType
    }
  }
`;

// NOTE: To be replaced by an API query that combines this data for us
function useGroupFilterOptions(options = {}) {
  const router = useRouter();

  const query = useQuery(GET_GROUP_OPTIONS, {
    fetchPolicy: 'cache-and-network',
    skip: !router?.asPath.includes('/community'),
    ...options,
  });

  return query?.data?.groupSearchOptions;
}

export default useGroupFilterOptions;
