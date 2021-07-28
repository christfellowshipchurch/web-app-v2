import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
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
