import { gql, useQuery } from '@apollo/client';

export const GET_SISTERHOOD_SEASON = gql`
  query SisterhoodPodcastSeason($seasonName: String!) {
    sisterhoodPodcastSeason(seasonName: $seasonName) {
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
  }

  return {
    contentItems: query?.data?.sisterhoodPodcastSeason || [],
    ...query,
  };
}

export default useSisterhoodPodcast;
