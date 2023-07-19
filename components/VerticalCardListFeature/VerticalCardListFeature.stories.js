import React from 'react';

import { Box } from 'ui-kit';

import { VerticalCardListFeature } from 'components';

const exportedObject = {
  title: 'components/VerticalCardListFeature',
  component: VerticalCardListFeature,
};

export default exportedObject;

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

const cardListDataOdd = {
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

const cardListDataEven = {
  title: 'This Sunday',
  cards: [
    cardData('BigCard'),
    cardData(1),
    cardData(2),
    cardData(3),
    cardData(4),
    cardData(5),
    cardData(6),
  ],
};

export const MultipleCardsOdd = () => (
  <Box maxWidth={1060} margin="auto">
    <VerticalCardListFeature data={cardListDataOdd} />
  </Box>
);

export const MultipleCardsEven = () => (
  <Box maxWidth={1060} margin="auto">
    <VerticalCardListFeature data={cardListDataEven} />
  </Box>
);
