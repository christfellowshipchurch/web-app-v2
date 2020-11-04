import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../config/apolloClient';
import { ThemeProvider } from '../ui-kit';

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
