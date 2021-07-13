import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { Footer, Header, SEO } from 'components';

function Layout(props = {}) {
  return (
    <>
      {props.title && <SEO title={props.title} {...props?.seoMetaTags} />}
      <Box display="flex" flexDirection="column" height="100vh">
        <Header darkMode={props?.darkMode} />
        <Box flexGrow="1">{props.children}</Box>
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
  contentMaxWidth: PropTypes.string,
  contentHorizontalPadding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  contentVerticalPadding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  title: PropTypes.string,
  darkMode: PropTypes.bool,
};

Layout.defaultProps = {
  darkMode: false,
};

export default Layout;
