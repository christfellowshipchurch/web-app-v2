import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { Footer, Header, SEO } from 'components';
import Styled from './Layout.styles';

function Layout({ children, title, meta, dropdownData, ...props }) {
  return (
    <>
      <SEO title={title} meta={meta} />
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        {...props}
      >
        <Header dropdownData={dropdownData} />
        <Styled.Content>{children}</Styled.Content>
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
  meta: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    keywords: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Layout;
