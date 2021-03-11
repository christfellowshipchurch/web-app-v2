import React from 'react';
import PropTypes from 'prop-types';

import { Box, Cell, utils } from 'ui-kit';
import { Footer, Header, SEO } from 'components';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

function Layout(props = {}) {
  return (
    <>
      <SEO title={props.title} />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Box>
          <Cell
            as="main"
            maxWidth={props.contentMaxWidth}
            px={props.contentHorizontalPadding}
            py={props.contentVerticalPadding}
          >
            {props.children}
          </Cell>
        </Box>
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
};

Layout.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
  contentHorizontalPadding: 'base',
  contentVerticalPadding: { _: 'l', lg: 'xl' },
};

export default Layout;
