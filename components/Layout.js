import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { Box } from '../styled';

const DEFAULT_TITLE = 'Christ Fellowship';

function getPageTitle(title) {
  if (title === DEFAULT_TITLE || title === 'Home') return DEFAULT_TITLE;
  return `${title} - ${DEFAULT_TITLE}`;
}

function Layout(props = {}) {
  return (
    <>
      <Head>
        <title>{getPageTitle(props.title)}</title>
      </Head>
      <Box as="main" maxWidth="800px" mx="auto" p="xl">
        {props.children}
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: DEFAULT_TITLE,
};

export default Layout;
