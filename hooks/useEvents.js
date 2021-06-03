import { gql, useQuery } from '@apollo/client';

export const GET_EVENTS = gql`
  query getEvents {
    allEvents {
      id
      title
      summary
      hideLabel
      nextOccurrence
      coverImage {
        name
        sources {
          uri
        }
      }
      sharing {
        url
        title
        message
      }
      events {
        start
      }
    }
  }
`;

function useEvents(options = {}) {
  const query = useQuery(GET_EVENTS, options);

  return {
    events: query?.data?.allEvents || [],
    ...query,
  };
}

export default useEvents;
