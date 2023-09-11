import { gql, useQuery } from '@apollo/client';

export const GET_HOME_ACTIONS = gql`
  query getHomeActions {
    getExternalHomeActions {
      id
      actions {
        id
        title
        subtitle
        description
        url
        icon
      }
    }
  }
`;

function useExternalHomeActions() {
  const query = useQuery(GET_HOME_ACTIONS, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    actions: query?.data?.getExternalHomeActions?.actions,
    ...query,
  };
}

export default useExternalHomeActions;
