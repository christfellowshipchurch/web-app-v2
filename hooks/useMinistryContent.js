import { gql, useQuery } from '@apollo/client';

export const GET_MINISTRY_CONTENT = gql`
  query getMinistryContent($ministry: String!) {
    getMinistryContent(ministry: $ministry) {
      id
      ... on UniversalContentItem {
        title
        summary
        coverImage {
          sources {
            uri
          }
        }
        sharing {
          url
        }
      }
    }
  }
`;

function useMinistryContent(options = {}) {
  const query = useQuery(GET_MINISTRY_CONTENT, options);

  return {
    items: query?.data?.node,
    ...query,
  };
}

export default useMinistryContent;
