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

function SEO(props = {}) {
  const pageTitle = getPageTitle(props.title);

  return (
    <Head>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta property="og:title" content={props.title} />
      <meta name="twitter:title" content={props.title} />
      {/* Keywords */}
      <meta name="keywords" content={props.meta.keywords} />
      {/* Description */}
      <meta name="description" content={props.meta.description} />
      <meta property="og:description" content={props.meta.description} />
      <meta name="twitter:description" content={props.meta.description} />
      {/* URL */}
      <meta property="og:url" content={props.meta.url} />
      <meta name="twitter:url" content={props.meta.url} />
      {/* Author */}
      {props.meta.author && (
        <>
          <meta name="author" content={props.meta.author} />,
          <meta property="og:article:author" content={props.meta.author} />
          <meta name="twitter:creator" content={props.meta.author} />
        </>
      )}
      {/* Image */}
      {props.meta.image && (
        <>
          <meta property="og:image" content={props.meta.image} />
          <meta name="twitter:image" content={props.meta.image} />
        </>
      )}
      {/* Video */}
      {props.meta.video && (
        <meta property="og:video" content={props.meta.video} />
      )}
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
  meta: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
    url: PropTypes.string,
    video: PropTypes.string,
  }),
  title: PropTypes.string,
};

SEO.defaultProps = {
  meta: {
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_IMAGE,
    keywords: DEFAULT_KEYWORDS,
    url: DEFAULT_URL,
  },
  title: DEFAULT_TITLE,
};

export default SEO;
