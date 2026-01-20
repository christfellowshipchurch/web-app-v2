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
      {/* We are turning off tracking for Segment on our website for the time being to cutdown on MTUs */}
      {/* {process.env.NEXT_PUBLIC_SEGMENT_KEY && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${process.env.NEXT_PUBLIC_SEGMENT_KEY}";;analytics.SNIPPET_VERSION="4.15.3";
            analytics.load("${process.env.NEXT_PUBLIC_SEGMENT_KEY}");
            }}();
          `,
          }}
        />
      )} */}
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_CODE}');`,
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
      {/* Microsoft Clarity */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ojo9prqys0");`,
        }}
      />
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

      {/* TikTok Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(w, d, t) {
              w.TiktokAnalyticsObject = t;
              var ttq = w[t] = w[t] || [];
              ttq.methods = [
                "page", "track", "identify", "instances", "debug", "on", "off", 
                "once", "ready", "alias", "group", "enableCookie", "disableCookie", 
                "holdConsent", "revokeConsent", "grantConsent"
              ];
              
              ttq.setAndDefer = function(t, e) {
                t[e] = function() {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                };
              };
              
              for (var i = 0; i < ttq.methods.length; i++) {
                ttq.setAndDefer(ttq, ttq.methods[i]);
              }
              
              ttq.instance = function(t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) {
                  ttq.setAndDefer(e, ttq.methods[n]);
                }
                return e;
              };
              
              ttq.load = function(e, n) {
                var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
                var o = n && n.partner;
                
                ttq._i = ttq._i || {};
                ttq._i[e] = [];
                ttq._i[e]._u = r;
                ttq._t = ttq._t || {};
                ttq._t[e] = +new Date;
                ttq._o = ttq._o || {};
                ttq._o[e] = n || {};
                
                n = document.createElement("script");
                n.type = "text/javascript";
                n.async = !0;
                n.src = r + "?sdkid=" + e + "&lib=" + t;
                e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n, e);
              };
              
              ttq.load('${process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CODE}');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />

      {/* Twitter conversion tracking base code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElementthumbs down,u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
      a=t.getElementsByTagNamethumbs down[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
      twq('config','${process.env.NEXT_PUBLIC_TWITTER_CODE}');
      `,
        }}
      />
    </Head>
  );
}

export default AppHead;
