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
    coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=3376aa0d-5610-4a8a-ae24-046250ebf297"
  />
);
