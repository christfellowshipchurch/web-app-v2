import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import includes from 'lodash/includes';
import { find, keyBy } from 'lodash';

const DEFAULT_TITLE = 'Christ Fellowship Church - Get the Most Out of Life';
const DEFAULT_DESCRIPTION = `Christ Fellowship Church is a church in South Florida that helps you do more than just get by. Life is complicated. But it doesn’t have to be. We’re here to help you live life to the fullest.`;
const DEFAULT_IMAGE = '/metadata_image.jpg';
const DEFAULT_KEYWORDS = `Christ Fellowship Church, Christ Fellowship, Church, Churches in South Florida, Churches Near Me, Churches in the Area`;
const DEFAULT_URL = 'https://christfellowship.church';

function getTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  // note : a catch for titles that already contain 'Christ Fellowship Church' so it doens't create extra long titles.
  if (includes(title, 'Christ Fellowship Church')) {
    return title;
  }
  return `${title} | Christ Fellowship Church`;
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
  const metadata = keyBy(props?.metadata, 'name');
  const title = getTitle(metadata?.title?.content || props?.title);
  const description = metadata?.description?.content || props.description;
  const image = metadata?.image?.content || props.image;
  const keywords = metadata?.keywords?.content || props.keywords;
  const url = metadata?.url?.content || props.url;
  const siteName = find(metadata, { name: 'og:site_name' })?.content || title;
  const type = find(metadata, { name: 'og:type' })?.content || props.type;

  return (
    <Head>
      <meta property="og:type" content={type || props.type} key="og:type" />

      {/* Title */}
      <title>{title}</title>
      <meta property="og:title" content={title} key="og:title" />
      <meta propert="og:site_name" content={siteName} key="og:site_name" />
      <meta name="twitter:title" content={title} />
      {/* Keywords */}
      <meta name="keywords" content={keywords} />
      {/* Description */}
      <meta name="description" content={description} />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta name="twitter:description" content={description} />
      {/* URL */}
      <meta property="og:url" content={url} key="og:url" />
      <meta name="twitter:url" content={url} />
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
      {image && (
        <>
          <meta property="og:image" content={image} key="og:image" />
          <meta name="twitter:image" content={image} />
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
  type: 'website',
  description: DEFAULT_DESCRIPTION,
  image: DEFAULT_IMAGE,
  keywords: DEFAULT_KEYWORDS,
  title: DEFAULT_TITLE,
  url: DEFAULT_URL,
  twitterCard: 'player',
  twitterHandle: '@christfellowship.church',
};

export default SEO;
