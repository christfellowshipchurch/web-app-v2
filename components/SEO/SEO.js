import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DEFAULT_TITLE = 'Christ Fellowship Church';
const DEFAULT_DESCRIPTION = `Christ Fellowship is a church in South Florida that helps you thrive in every area of life. Christ Fellowship Church's passion is to help you know God, grow in your relationship with God & others, and discover your purpose so that you can impact the world.`;
const DEFAULT_IMAGE =
  'https://rock.christfellowship.church/Content/images/CF-Worship-Generic.jpg';
const DEFAULT_KEYWORDS = `Church, Christ Fellowship, Christ Fellowship Church, Churches in South Florida`;
const DEFAULT_URL = 'https://christfellowship.church';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

/**
 * ! Make sure to de-dupe meta tags
 * Meta tags that use a `name` will automatically de-dupe, but those defined by `property` will not.
 *
 * In the case of defining a meta tag using `property`, please add a unique `key` so that Next will automatically detect and remove duplicates.
 *
 * https://nextjs.org/docs/api-reference/next/head
 */
function SEO(props = {}) {
  const pageTitle = getPageTitle(props.title);

  return (
    <Head>
      <meta property="og:type" content={props.type} key="og:type" />

      {/* Title */}
      <title>{pageTitle}</title>
      <meta property="og:title" content={props.title} key="og:title" />
      <meta name="twitter:title" content={props.title} />
      {/* Keywords */}
      <meta name="keywords" content={props.keywords} />
      {/* Description */}
      <meta name="description" content={props.description} />
      <meta
        property="og:description"
        content={props.description}
        key="og:description"
      />
      <meta name="twitter:description" content={props.description} />
      {/* URL */}
      <meta property="og:url" content={props.url} key="og:url" />
      <meta name="twitter:url" content={props.url} />
      {/* Author */}
      {props.author && (
        <>
          <meta name="author" content={props.author} />,
          <meta
            property="og:article:author"
            content={props.author}
            key="og:article:author"
          />
          <meta name="twitter:creator" content={props.author} />
        </>
      )}
      {/* Image */}
      {props.image && (
        <>
          <meta property="og:image" content={props.image} key="og:image" />
          <meta name="twitter:image" content={props.image} />
        </>
      )}
      {/* Video */}
      {props.video && (
        <meta property="og:video" content={props.video} key="og:video" />
      )}
      {/* Twitter */}
      <meta name="twitter:card" content={props.twitterCard} />
      <meta name="twitter:site" content={props.twitterHandle} />
      <meta name="twitter:creator" content={props.twitterHandle} />
      {/* Misc. */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.children}
    </Head>
  );
}

SEO.propTypes = {
  type: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  video: PropTypes.string,
};

SEO.defaultProps = {
  type: "website",
  description: DEFAULT_DESCRIPTION,
  image: DEFAULT_IMAGE,
  keywords: DEFAULT_KEYWORDS,
  title: DEFAULT_TITLE,
  url: DEFAULT_URL,
  twitterCard: 'player',
  twitterHandle: '@christfellowship.church',
};

export default SEO;
