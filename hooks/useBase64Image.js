import { gql, useQuery } from '@apollo/client';

export const GET_BASE_64_IMAGE = gql`
  query base64Image(url: String!) {

  }
`;

function useBase64Image(options = {}) {
  const query = useQuery(GET_BASE_64_IMAGE, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    data,
  };
}

export default useBase64Image;
