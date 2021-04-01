import { gql, useMutation } from '@apollo/client';

export const TRACK_EVENT = gql`
  mutation track($input: AnalyticsTrackInput!) {
    trackEvent(input: $input) {
      success
    }
  }
`;

function useTrackEvent(options = {}) {
  return useMutation(TRACK_EVENT, options);
}

export default useTrackEvent;
