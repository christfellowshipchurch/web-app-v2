import React from 'react';

import { Box, CardGrid, DefaultCard } from 'ui-kit';

export default {
  component: CardGrid,
  tags: ['autodocs'],
};

const cardProps = {
  title: 'DefaultCard',
  description: 'This is a default card with an image.',
  coverImage: 'https://source.unsplash.com/random/1000x1000',
  coverImageOverlay: true,
  type: 'HIGHLIGHT_SMALL',
};

export const Default = () => (
  <Box maxWidth={1060} margin="auto">
    <CardGrid>
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
    </CardGrid>
  </Box>
);

export const TwoColumns = () => (
  <Box maxWidth={1060} margin="auto">
    <CardGrid columns="2">
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
      <DefaultCard {...cardProps} />
    </CardGrid>
  </Box>
);
