import React from 'react';

import { Box, Cell, utils } from 'ui-kit';
import { Layout } from 'components';

const NotFound = () => {
  return (
    <Layout title="404 Not Found">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box mt="xl" textAlign="center">
          <Box
            as="img"
            alt="Error Image"
            maxWidth={750}
            src="/error.png"
            margin="auto"
          />
          <Box as="h1" mt="base">
            Page Not Found
          </Box>
          <Box as="p" fontSize="l" p="l">
            The page you’re looking for doesn’t exist, or is unavailable.
          </Box>
        </Box>
      </Cell>
    </Layout>
  );
};

export default NotFound;
