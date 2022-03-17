import { gql, useQuery } from '@apollo/client';

export const GET_ACTION_BANNER = gql`
  query ActionBanner {
    actionBanner {
      id
      title
      htmlContent

      theme {
        colors {
          primary
        }
      }

      actions {
        action
        title
        relatedNode {
          id
          ... on Url {
            url
          }
        }
      }
    }
  }
`;

function useActionBanner(options) {
  const query = useQuery(GET_ACTION_BANNER, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    actionBanner: query?.data?.actionBanner,
    ...query,
  };
}

export default useActionBanner;
