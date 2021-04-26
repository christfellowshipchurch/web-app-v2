import { gql, useMutation } from '@apollo/client';

export const TRACK_PAGE_VIEW = gql`
  mutation trackPageView($pageUrl: String!, $pageTitle: String!) {
    trackPageView(pageUrl: $pageUrl, pageTitle: $pageTitle) {
      success
    }
  }
`;

function useTrackPageView(options = {}) {
  return useMutation(TRACK_PAGE_VIEW, options);
}

export default useTrackPageView;
