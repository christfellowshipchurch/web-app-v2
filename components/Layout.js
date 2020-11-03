import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { rem } from '../utils';
import { Header } from '../components';
import { Box } from '../styled';

const DEFAULT_TITLE = 'Christ Fellowship';
const DEFAULT_CONTENT_WIDTH = rem('1100px');

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
      <Header />
      <Box as="main" maxWidth={props.contentMaxWidth} mx="auto" p="xl">
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
  contentMaxWidth: PropTypes.string,
  title: PropTypes.string,
};

Layout.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
  title: DEFAULT_TITLE,
};

export default Layout;
