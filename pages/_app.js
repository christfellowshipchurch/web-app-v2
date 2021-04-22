import Head from 'next/head';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    function handleRouteChangeComplete() {
      window?.scrollTo?.(0, 0);
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <AppProvider initialApolloState={pageProps.initialApolloState}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
