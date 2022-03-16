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

  console.log({ query });

  return {
    actionBanner: query?.data,
    ...query,
  };
}

export default useActionBanner;
