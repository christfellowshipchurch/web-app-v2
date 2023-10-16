import React from 'react';

import Box from './Box';

export default {
  tags: ['autodocs'],
  component: Box,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <Box bg="black" height="200px" width="200px" />;
