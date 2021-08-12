import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import gtag from '../../lib/gtag';

const DEFAULT_DESCRIPTION = `We exist to invite one another into a growing relationship with Jesus.`;
const DEFAULT_KEYWORDS = `Church, Long Hollow, Long Hollow Baptist, Long Hollow Church, Churches in Nashville`;
const DEFAULT_TITLE = 'Long Hollow Church';
const DEFAULT_IMAGE = '/lh.jpeg';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

function SEO(props = {}) {
  const router = useRouter();
  const title = getPageTitle(props.meta.title || props.title);
  const url = `https://longhollow.com${router.asPath}`;

  useEffect(() => {
    let gtagValid = true;

    // Do not run Google Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

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


    const handleRouteChange = url => {
      if (gtagValid) {
        gtag.pageview(url);
      }
    };

    if (gtagValid) {
      gtag.pageview();
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={props.meta.title} />
      <meta name="twitter:title" content={props.meta.title} />
      <meta name="keywords" content={props.meta.keywords} />
      <meta name="description" content={props.meta.description} />
      <meta property="og:description" content={props.meta.description} />
      <meta name="twitter:description" content={props.meta.description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:url" content={url} />
      <meta property="og:image" content={props.meta.image} />
      <meta name="twitter:image" content={props.meta.image} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
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


      {props.children}
    </Head>
  );
}

SEO.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
  }),
  title: PropTypes.string,
};

SEO.defaultProps = {
  meta: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_IMAGE,
    keywords: DEFAULT_KEYWORDS,
  },
  title: DEFAULT_TITLE,
};

export default SEO;
