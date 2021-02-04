import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { Footer, Header, SEO } from 'components';

function Layout({ children, title, ...props }) {
  return (
    <>
      <SEO title={title} />
      <Box minHeight="100vh" display="flex" flexDirection="column" {...props}>
        <Header />
        <Box style={{ overflowX: 'hidden', flex: 1 }}>{children}</Box>
        <Footer />
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

export default Layout;
