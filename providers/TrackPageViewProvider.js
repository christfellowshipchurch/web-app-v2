import React, { useEffect} from 'react';
import { useRouter } from 'next/router'


import useTrackPageView from 'hooks/useTrackPageView';
import { useAuthState } from 'providers/AuthProvider';

function TrackPageViewProvider({ children }) {
  const router = useRouter();
  const authState = useAuthState();
  const [trackPageView] = useTrackPageView();
  useEffect(() => {
    const handleRouteChange = () => {
      try {
        if (authState.authenticated){
          trackPageView({ variables: {
            pageTitle: document.title,
            pageUrl: window.location.toString()
          }})
        }
      } catch (e) {
        console.log(e, 'Tracking Page View failed')
      }
    }

    // Initial Load
    handleRouteChange()

    // Page change
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [authState])
  return children
}

export default TrackPageViewProvider;
