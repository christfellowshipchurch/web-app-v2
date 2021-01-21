import { gql, useQuery } from '@apollo/client';

export const GET_COMMUNITIES = gql`
  query getCommunities {
    allCommunities {
      ...communitiesFragment
    }
  }
  fragment communitiesFragment on CommunityItem {
    id
    title
    summary
    type
    coverImage {
      sources {
        uri
      }
    }
    lineups {
      title
      coverImage {
        sources {
          uri
        }
      }
    }
  }
`;

function useCommunities(options = {}) {
  const query = useQuery(GET_COMMUNITIES, options);

  return {
    communities: query?.data?.allCommunities || [],
    ...query,
  };
}

export default useCommunities;
