import React from 'react';
import { Box } from 'ui-kit';

import RowCard from './RowCard';

export default {
  component: RowCard,
  tags: ['autodocs'],
};

const cardProps = {
  title: 'Card',
  description: 'This is a default card with an image.',
  coverImage: 'https://source.unsplash.com/random/1000x1000',
  marginBottom: 'base',
};

export const Default = () => (
  <Box maxWidth={1000} margin="auto">
    <RowCard {...cardProps} />
    <RowCard {...cardProps} title="No Subtitle" description={null} />
  </Box>
);
