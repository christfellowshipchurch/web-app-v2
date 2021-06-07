import React from 'react';

import { Header, Footer, SEO } from 'components';
import { Box } from 'ui-kit';

import Styled from './ExternalHome.styles';

export default function ExternalHome(props = {}) {
  return (
    <>
      {props.title && <SEO title={props.title} />}
      <Styled>
        <Header darkMode />
        <Box flexGrow={1} as="h1" color="white" p="xxl">
          External Home
        </Box>
        <Footer />
      </Styled>
    </>
  );
}
