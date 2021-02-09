import React from 'react';

import { Box, DefaultCard, HorizontalHighlightCard } from 'ui-kit';

import CardCarousel from './';

export default {
  title: 'ui-kit/CardCarousel',
  component: CardCarousel,
};

const cardProps = {
  mx: 'xs',
  coverImage: 'https://source.unsplash.com/random/1000x1000',
  description: 'This is a card in a carousel',
  title: 'DefaultCard',
  coverImageOverlay: true,
};

const carouselDemo = ({ cardsDisplayed, Card }) => (
  <Box mx="auto" maxWidth={1000}>
    <CardCarousel cardsDisplayed={cardsDisplayed}>
      <Card {...cardProps} />
      <Card {...cardProps} />
      <Card {...cardProps} />
      <Card {...cardProps} />
    </CardCarousel>
  </Box>
);

export const LargeCards = () =>
  carouselDemo({ cardsDisplayed: 2, Card: HorizontalHighlightCard });
export const MediumCards = () =>
  carouselDemo({ cardsDisplayed: 3, Card: DefaultCard });
export const Disabled = () =>
  carouselDemo({ cardsDisplayed: 4, Card: DefaultCard });
