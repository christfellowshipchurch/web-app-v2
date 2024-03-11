import React from 'react';

import DefaultCard from './DefaultCard';

export default {
  component: DefaultCard,
  tags: ['autodocs'],
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

export const CoverContent = () => (
  <DefaultCard
    title={null}
    description={null}
    coverImageTitle="World-renowned Author Speaking Event"
    coverImageDescription="This represents an event that is currently live"
    coverImage="https://source.unsplash.com/random/1000x1000"
    coverImageOverlay={true}
    height={450}
  />
);

export const CoverImageLabel = () => (
  <DefaultCard
    title="DefaultCard with coverImageLabel"
    description="This is a default card with an image."
    coverImage="https://source.unsplash.com/random/1000x1000"
    coverImageLabel="Cover Image Label"
  />
);

export const LiveContent = () => (
  <DefaultCard
    title="World-renowned Author Speaking Event"
    description="This represents an event that is currently live"
    coverImage="https://source.unsplash.com/random/1000x1000"
    coverImageLabel="Live Now"
    coverImageLabelBgColor="live"
  />
);
