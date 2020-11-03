import React from 'react';

import { Box, Cell } from '../styled';

function Footer(props = {}) {
  return (
    <Box>
      <Box bg="fg" color="white" p="xl">
        <Cell>Footer 1</Cell>
      </Box>
      <Box bg="white" p="xl" textAlign="center">
        <Cell>Footer 2</Cell>
      </Box>
    </Box>
  );
}

export default Footer;
