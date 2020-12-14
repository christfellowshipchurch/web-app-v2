import React from 'react';

import DefaultCard from './DefaultCard';

export default {
  title: 'ui-kit/DefaultCard',
  component: DefaultCard,
};

export const Default = () => (
  <DefaultCard title="DefaultCard" description="This is a default card." />
);

export const CoverImage = () => (
  <DefaultCard
    title="DefaultCard"
    description="This is a default card with an image."
    coverImage="https://source.unsplash.com/random/1000x1000"
  />
);
