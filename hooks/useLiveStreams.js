import { gql, useQuery } from '@apollo/client';

export const GET_LIVE_STREAMS = gql`
  query getLiveStreams {
    liveStreams {
      isLive
      media {
        name
        embedHtml 
        sources {
          uri
        }
      }
      webViewUrl
    }
  }
`;

function useLiveStreams(options = {}) {
  const query = useQuery(GET_LIVE_STREAMS, options);

  return {
    liveStreams: query?.data?.liveStreams || [],
    ...query,
  };
}

export default useLiveStreams;
