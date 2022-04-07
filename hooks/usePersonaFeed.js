import { gql } from '@apollo/client';
import useAuthQuery from './useAuthQuery';

export const GET_PERSONA_FEED = gql`
  query PersonaFeed {
    node(
      id: "ActionListFeature:9724110384a5109532f35a4980ea9b7732b56327ff3959d32d21ba892a0dc560b80b586db1fe0203b56b707336e1cbf5458c80283e5e6db5bed5dcdb14ac16010a487e9c64f68940fc5ee89cc59a5be969439499e81e4f0df28b58a935f888c19979048496ff2f8f6a3ff762ebb6e8a1"
    ) {
      ... on ActionListFeature {
        actions {
          relatedNode {
            id
            ... on UniversalContentItem {
              title
              summary
              summaryHTML
              showOnHomePage
              featureOnHomePage
              linkURL
              linkText
              sharing {
                url
              }
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
  }
`;

function usePersonaFeed(options = {}) {
  const query = useAuthQuery(GET_PERSONA_FEED, options);

  return {
    ...query,
    personaFeed: query?.data?.node?.actions,
  };
}

export default usePersonaFeed;
