import Head from 'next/head';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { initializeApollo } from 'lib/apolloClient';
import getDropdownData from 'utils/getDropdownData';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

function App({ Component, pageProps = {}, dropdownData }) {
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

  const { initialApolloState, ...componentProps } = pageProps;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <AppProvider initialApolloState={initialApolloState}>
        <Component dropdownData={dropdownData} {...componentProps} />
      </AppProvider>
    </>
  );
}

App.getInitialProps = async () => {
  const apolloClient = initializeApollo();

  const dropdownData = await getDropdownData(apolloClient);

  return { dropdownData };
};

export default App;
