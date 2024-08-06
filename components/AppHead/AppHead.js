import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { fbq, gtag } from 'lib/analytics';

function AppHead({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    let gtagValid = true;
    let fbqValid = true;

    // Do not run Google Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    // Only run Google Analytics and Facebook Pixels in production
    if (process.env.NODE_ENV !== 'production') return null;

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

  return (
    <Head>
      {/* Platform Specific Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=2"
      />
      <link rel="manifest" href="/site.webmanifest?v=2" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2" color="#0092bc" />
      <link rel="shortcut icon" href="/favicon.ico?v=2" />
      <meta
        name="apple-mobile-web-app-title"
        content="Christ Fellowship Church"
      />
      <meta name="application-name" content="Christ Fellowship Church" />
      <meta name="msapplication-TileColor" content="#0092bc" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />

      {process.env.NEXT_PUBLIC_SEGMENT_KEY && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${process.env.NEXT_PUBLIC_SEGMENT_KEY}";;analytics.SNIPPET_VERSION="4.15.3";
            analytics.load("${process.env.NEXT_PUBLIC_SEGMENT_KEY}");
            }}();
          `,
          }}
        />
      )}

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

      {/* Observe DOM mutations whether the <html> node was changed by Google Translate */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(
  function() {
    if (window.MutationObserver) {
      var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function (mutation) {
          var oldElementClass = mutation.oldValue;
          var currentElementClass = mutation.target.className;
          if (oldElementClass.indexOf('translated-') === -1 && currentElementClass.indexOf('translated-') > -1) {
            window.dataLayer.push({
              'event' : 'pageTranslated',
              'translationLanguage' : mutation.target.lang || document.getElementsByTagName('html')[0].getAttribute('xml:lang'),
              'translationService' : 'on-page google translate'
            })
          }
      })
    })
      
      var htmlNode = document.querySelector('html');
      mutationObserver.observe(htmlNode, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class']
      })
    }



    // Let's also track pageviews when the page is translated directly from translate.google.com or bing.com/translator
    // A function that can return individual query parameter
    function getUrlParameter(name) {
      name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Check if the page is being translated directly from translate.google.com (viewed within the iframe)
    if (window.location.href.indexOf('translate.googleusercontent.com') > -1 ) {
      window.dataLayer.push({
        'event' : 'pageTranslated',
        'translationLanguage' : getUrlParameter('tl'),
        'translationService' : 'google translate website'
      })
    }

    // Check if the page is being translated directly from bing.com/translator (viewed within the iframe)
    if (window.location.href.indexOf('translatoruser-int.com') > -1 ) {
      window.dataLayer.push({
        'event' : 'pageTranslated',
        'translationLanguage' : getUrlParameter('to'),
        'translationService' : 'bing translator website'
      })
    }
    })();`,
        }}
      />

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
              alt=""
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_CODE}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
      {/* Hotjar Tracking Code for christfellowship.church */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2502416,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <style>{'html { scroll-behavior: smooth; }'}</style>

      {/* Wistia Embed */}
      <script
        src="https://fast.wistia.com/assets/external/channel.js"
        async
      ></script>

      {/* HubSpot Script */}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}.js`}
      ></script>
    </Head>
  );
}

export default AppHead;
