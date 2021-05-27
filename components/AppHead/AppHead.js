import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useCurrentUser } from 'hooks';

import gtag from 'lib/gtag';
import amplitude from 'lib/amplitude';
import fbq from 'lib/fbq';

function AppHead({ Component, pageProps }) {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    let gtagValid = true;
    let fbqValid = true;

    // Do not run Google Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    // Only run Google Analytics and Facebook Pixels in production
    if (!process.env.NODE_ENV === 'production') return null;

    // NEXT_PUBLIC_GA_CODE  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_GA_CODE) {
      console.warn(
        'GoogleAnalytics tracking code is required to initialize GoogleAnalytics'
      );

      gtagValid = false;
    }

    if (!window.gtag) {
      console.warn(
        'GoogleAnalytics should be loaded manually before gtag is called.'
      );

      gtagValid = false;
    }

    // NEXT_PUBLIC_FB_CODE  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_FB_CODE) {
      console.warn(
        'Facebook Pixel code is required to initialize FacebookPixels'
      );

      fbqValid = false;
    }

    if (!window.fbq) {
      console.warn(
        'Facebook Pixels should be loaded manually before fbq is called.'
      );

      fbqValid = false;
    }

    const handleRouteChange = url => {
      if (gtagValid) {
        gtag.pageview(url);
      }

      if (fbqValid) {
        fbq.pageview();
      }
    };

    if (!gtagValid && !fbqValid) return null;

    if (gtagValid) {
      gtag.pageview();
    }

    if (fbqValid) {
      fbq.pageview();
    }

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

      {/* Global Site Code Pixel - Facebook Pixel */}
      {/* Facebook meta-tag for new iOS 14 website verification */}
      <meta
        name="facebook-domain-verification"
        content="n3r79t0v9g0j5ogkl0m9hzc9g5pdft"
      />
      {process.env.NODE_ENV === 'production' &&
      process.env.NEXT_PUBLIC_FB_CODE ? (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${process.env.NEXT_PUBLIC_FB_CODE});
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_CODE}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </Head>
  );
}

export default AppHead;
