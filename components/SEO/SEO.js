import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DEFAULT_DESCRIPTION = `Christ Fellowship is a church in South Florida that helps you thrive in every area of life. Christ Fellowship Church's passion is to help you know God, grow in your relationship with God & others, and discover your purpose so that you can impact the world.`;
const DEFAULT_KEYWORDS = `Church, Christ Fellowship, Christ Fellowship Church, Churches in South Florida`;
const DEFAULT_TITLE = 'Christ Fellowship Church';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

function SEO(props = {}) {
  const title = getPageTitle(props.title);

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="keywords" content={props.meta.keywords} />
      <meta name="description" content={props.meta.description} />
      <meta property="og:description" content={props.meta.description} />
      <meta name="twitter:description" content={props.meta.description} />
      <meta property="og:url" content={props.meta.url} />
      <meta name="twitter:url" content={props.meta.url} />
      <meta property="og:image" content={props.meta.url} />
      <meta name="twitter:image" content={props.meta.url} />
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
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
    url: PropTypes.string,
  }),
  title: PropTypes.string,
};

SEO.defaultProps = {
  meta: {
    description: DEFAULT_DESCRIPTION,
    image: '',
    keywords: DEFAULT_KEYWORDS,
    url: '',
  },
  title: DEFAULT_TITLE,
};

export default SEO;
