import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

const DEFAULT_DESCRIPTION = `Long Hollow is one church that meets in two locations just north of Nashville. We’re a community of believers with something for everyone; whether you’re checking out the claims of Christ for the first time, or are looking for a new place to call home, Long Hollow has a place for you!`;
const DEFAULT_KEYWORDS = `Church, Long Hollow, Long Hollow Baptist, Long Hollow Baptist Church, Churches in Nashville`;
const DEFAULT_TITLE = 'Long Hollow Baptist Church';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

function SEO(props = {}) {
  const router = useRouter();
  const title = getPageTitle(props.meta.title || props.title);
  const url = `${process.env.BASE_URL}${router.asPath}`;

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
    title: '',
    description: DEFAULT_DESCRIPTION,
    image: '',
    keywords: DEFAULT_KEYWORDS,
  },
  title: DEFAULT_TITLE,
};

export default SEO;
