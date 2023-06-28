import { gql, useQuery } from '@apollo/client';

export const GET_DEFINED_VALUE_LIST = gql`
  query getDefinedValueList($id: String!) {
    getDefinedValueListByIdentifier(identifier: $id) {
      values {
        id
        value
        guid
      }
    }
  }
`;

function useDefinedValueList(options) {
  const query = useQuery(GET_DEFINED_VALUE_LIST, {
    ...options,
  });

  return {
    values: query?.data?.getDefinedValueListByIdentifier?.values || [],
  };
}

export default useDefinedValueList;
