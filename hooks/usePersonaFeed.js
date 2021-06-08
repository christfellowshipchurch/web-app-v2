import { gql, useQuery } from '@apollo/client';

export const GET_PERSONA_FEED = gql`
  query PersonaFeed {
    personaFeed {
      edges {
        node {
          id
          title
          summary
          ... on UniversalContentItem {
            showOnHomePage
            featureOnHomePage
            linkURL
            linkText
            coverImage {
              sources {
                uri
              }
            }
          }
        }
      }
    }
  }
`;

function usePersonaFeed(options = {}) {
  const query = useQuery(GET_PERSONA_FEED, options);

  return {
    ...query,
    articles: query?.data?.personaFeed?.edges,
  };
}

export default usePersonaFeed;
