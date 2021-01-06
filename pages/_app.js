import Head from 'next/head';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        {/* This will throw a 403 if you don't run on local.christfellowship.church! */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/7426316/6701612/css/fonts.css"
        />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <AppProvider initialApolloState={pageProps.initialApolloState}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
