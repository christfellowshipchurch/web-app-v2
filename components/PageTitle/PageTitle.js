import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DEFAULT_TITLE = 'Christ Fellowship';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

function PageTitle(props = {}) {
  return (
    <Head>
      <title>{getPageTitle(props.title)}</title>
    </Head>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  title: DEFAULT_TITLE,
};

export default PageTitle;
