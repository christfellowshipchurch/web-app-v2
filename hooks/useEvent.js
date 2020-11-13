import { gql, useQuery } from '@apollo/client';

export const GET_EVENT = gql`
  query getEvent($title: String!) {
    getEventContentByTitle(title: $title) {
      id
      title
      summary
      htmlContent
      coverImage {
        name
        sources {
          uri
        }
      }
      tags
      eventGroupings {
        name
        instances {
          id
          start
          end
        }
      }
      callsToAction {
        call
        action
      }
    }
  }
`;

function useEvent(options = {}) {
  const query = useQuery(GET_EVENT, options);

  return {
    event: query?.data?.getEventContentByTitle || [],
    ...query,
  };
}

export default useEvent;
