import React from 'react';
import Carousel from 'react-multi-carousel';

import { Box, CardGrid } from '..';
import HorizontalHighlightCard from './HorizontalHighlightCard';

export default {
  title: 'ui-kit/HorizontalHighlightCard',
  component: HorizontalHighlightCard,
};

const card = cardType => {
  return {
    mx: 'xs',
    coverImage: 'https://source.unsplash.com/random/1000x1000',
    description: 'This is a default Horiztontal Highlight Card',
    title: 'Horizontal Highlight Card',
    coverImageOverlay: true,
    type: cardType,
  };
};

export const Small = () => (
  <CardGrid columns={'4'} maxWidth={1000}>
    <HorizontalHighlightCard {...card('HIGHLIGHT_SMALL')} />
    <HorizontalHighlightCard {...card('HIGHLIGHT_SMALL')} />
    <HorizontalHighlightCard {...card('HIGHLIGHT_SMALL')} />
    <HorizontalHighlightCard {...card('HIGHLIGHT_SMALL')} />
  </CardGrid>
);

export const Medium = () => (
  <CardGrid columns={'3'} maxWidth={1000}>
    <HorizontalHighlightCard {...card('HIGHLIGHT_MEDIUM')} />
    <HorizontalHighlightCard {...card('HIGHLIGHT_MEDIUM')} />
    <HorizontalHighlightCard {...card('HIGHLIGHT_MEDIUM')} />
  </CardGrid>
);

export const Default = () => (
  <CardGrid columns={'2'} maxWidth={1000}>
    <HorizontalHighlightCard {...card()} />
    <HorizontalHighlightCard {...card()} />
  </CardGrid>
);
