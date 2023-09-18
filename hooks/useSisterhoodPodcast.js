import { gql, useQuery } from '@apollo/client';

export const GET_SISTERHOOD_SEASON = gql`
  query SisterhoodPodcastSeason($seasonNumber: Int!) {
    sisterhoodPodcastSeason(seasonNumber: $seasonNumber) {
      title
      summary
      id
      coverImage {
        name
        sources {
          uri
        }
      }
      ... on NodeRoute {
        routing {
          pathname
        }
      }
    }
  }
`;

function useSisterhoodPodcast(options = {}) {
  const query = useQuery(GET_SISTERHOOD_SEASON, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  // Check if the query is loading or has errors

  if (query.loading) {
    return { loading: true };
  } else {
    // REMOVE THIS
    console.log(query);
    console.log('data: ', query?.data);
  }

  return {
    contentItems: query?.data?.sisterhoodPodcastSeason || [],
    ...query,
  };
}

export default useSisterhoodPodcast;
