import React from 'react';

import {
  Box,
  CardGrid,
  DefaultCard,
  HorizontalHighlightCard,
  RowCard,
} from 'ui-kit';

import { HeroListFeature, VerticalCardListFeature } from 'components';

export default {
  title: 'ui-kit/CardGrid',
  component: CardGrid,
};

const cardProps = {
  title: 'DefaultCard',
  description: 'This is a default card with an image.',
  coverImage: 'https://source.unsplash.com/random/1000x1000',
  coverImageOverlay: true,
  type: 'HIGHLIGHT_SMALL',
};

export const Default = () => (
  <CardGrid>
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
  </CardGrid>
);

export const TwoColumns = () => (
  <CardGrid columns={'2'}>
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
    <DefaultCard {...cardProps} />
  </CardGrid>
);

const cardData = altTitle => {
  return {
    title: altTitle ? altTitle : 'This is a Card',
    summary: 'CardListFeature test',
    subtitle: 'CardListFeature test',
    coverImage: {
      sources: [
        {
          uri: 'https://source.unsplash.com/random/1000x1000',
        },
      ],
    },
    image: {
      sources: [
        {
          uri: 'https://source.unsplash.com/random/1000x1000',
        },
      ],
    },
    relatedNode: {
      id: 'blahblahblah',
    },
  };
};

const verticalHeroData = {
  title: 'This Sunday',
  cards: [
    cardData('BigCard'),
    cardData(1),
    cardData(2),
    cardData(3),
    cardData(4),
    cardData(5),
  ],
};

const heroListData = {
  title: 'This Sunday',
  heroCard: cardData('BigCard'),
  actions: [cardData(1), cardData(2), cardData(3), cardData(4), cardData(5)],
};

export const HeroCardList = () => (
  <Box maxWidth={1060} margin="auto">
    <HeroListFeature data={heroListData} />
  </Box>
);

export const VerticalCardList = () => (
  <Box maxWidth={1060} margin="auto">
    <VerticalCardListFeature data={verticalHeroData} />
  </Box>
);
