import React from 'react';

import { CardGrid, DefaultCard } from '../../ui-kit';

export default {
  title: 'ui-kit/CardGrid',
  component: CardGrid,
};

export const Default = () => (
  <CardGrid>
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
  </CardGrid>
);
