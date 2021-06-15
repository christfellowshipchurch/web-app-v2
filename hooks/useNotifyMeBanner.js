import { gql, useQuery } from '@apollo/client';

export const GET_NOTIFY_ME_BANNER = gql`
  query notifyMeBanner($preferenceId: ID!) {
    notifyMeBanner(preferenceId: $preferenceId) {
      title
      htmlContent
    }
  }
`;

function useNotifyMeBanner(options = {}) {
  const query = useQuery(GET_NOTIFY_ME_BANNER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    notifyMeBanner: query?.data?.notifyMeBanner,
    ...query,
  };
}

export default useNotifyMeBanner;
