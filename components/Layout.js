import React from 'react';
import PropTypes from 'prop-types';

import { Box, Cell, utils } from '../ui-kit';
import { Footer, Header, PageTitle } from '../components';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

function Layout(props = {}) {
  return (
    <>
      <PageTitle title={props.title} />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Box>
          <Cell
            as="main"
            maxWidth={props.contentMaxWidth}
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
  contentVerticalPadding: PropTypes.string,
  title: PropTypes.string,
};

Layout.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
  contentVerticalPadding: 'xl',
};

export default Layout;
