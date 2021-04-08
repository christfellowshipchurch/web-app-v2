import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useCurrentUser } from 'hooks';

import configureNProgress from 'config/nprogress';
import { AppProvider } from 'providers';
import gtag from 'lib/gtag';
import amplitude from 'lib/amplitude';

import 'stream-chat-react/dist/css/index.css';
import './StreamChatOverrides.css';

// Tracks the route changes and adds a bar to the top.
configureNProgress();

function App({ Component, pageProps }) {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    // Do not run Google Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    // Only run Google Analytics in production
    if (!process.env.NODE_ENV === 'production') return null;

    // NEXT_PUBLIC_GA_CODE  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_GA_CODE) {
      console.warn(
        'GoogleAnalytics tracking code is required to initialize GoogleAnalytics'
      );
      return null;
    }

    if (!window.gtag) {
      console.warn(
        'GoogleAnalytics should be loaded manually before gtag is called.'
      );
      return null;
    }

    const handleRouteChange = url => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Do not run Amplitude Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    // Only run Amplitude Analytics in production
    if (!process.env.NODE_ENV === 'production') return null;

    // NEXT_PUBLIC_AMPLITUDE_KEY  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_AMPLITUDE_KEY) {
      console.warn(
        'Amplitude Analytics tracking code is required to initialize Amplitude Analytics'
      );
      return null;
    }

    amplitude.init(currentUser);
  }, [currentUser]);

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
        {/* Global site tag (gtag.js) - Google Analytics */}
        {process.env.NODE_ENV === 'production' &&
        process.env.NEXT_PUBLIC_GA_CODE ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_CODE}`}
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_CODE}', {
          page_path: window.location.pathname,
        });
      `,
              }}
            />
          </>
        ) : null}
      </Head>
      <AppProvider initialApolloState={pageProps.initialApolloState}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
