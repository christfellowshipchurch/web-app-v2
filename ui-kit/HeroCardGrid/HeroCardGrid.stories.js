import React from 'react';

import { HeroCardGrid, DefaultCard } from '..';

export default {
  title: 'ui-kit/HeroCardGrid',
  component: HeroCardGrid,
};

export const Default = () => (
  <HeroCardGrid>
    <DefaultCard
      coverImageTitle="Cover Image Card"
      coverImage="https://source.unsplash.com/random/1000x1000"
      coverImageOverlay={true}
      height={{ _: '250px', md: '450px' }}
      display="block"
    />
    <DefaultCard
      title="DefaultCard"
      description="This is a default card with an image."
      coverImage="https://source.unsplash.com/random/1000x1000"
    />
    <DefaultCard
      title="DefaultCard"
      description="This is a default card with an image."
      coverImage="https://source.unsplash.com/random/1000x1000"
    />
    <DefaultCard
      title="DefaultCard"
      description="This is a default card with an image."
      coverImage="https://source.unsplash.com/random/1000x1000"
    />
  </HeroCardGrid>
);
