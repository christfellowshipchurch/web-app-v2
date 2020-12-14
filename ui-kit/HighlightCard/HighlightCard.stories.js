import React from 'react';
import HighlightCard from './HighlightCard';

export default {
  title: 'ui-kit/HighlightCard',
  component: HighlightCard,
};

export const WithText = () => (
  <HighlightCard
    title="HighlightCard"
    description="This is a default card with an image."
    coverImage="https://source.unsplash.com/random/1000x1000"
  />
);

export const WithLabel = () => (
  <HighlightCard
    title="HighlightCard"
    description="This is a default card with an image."
    label="this is a label"
    coverImage="https://source.unsplash.com/random/1000x1000"
  />
);