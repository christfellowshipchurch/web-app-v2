import Head from 'next/head';

import { AppProvider } from '../providers';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider initialApolloState={pageProps.initialApolloState}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
