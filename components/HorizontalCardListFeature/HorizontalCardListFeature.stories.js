import React from 'react';

import { Box } from 'ui-kit';

import { HorizontalCardListFeature } from 'components';

const exportedObject = {
  title: 'components/HorizontalCardListFeature',
  component: HorizontalCardListFeature,
  tags: ['autodocs'],
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

const multipleCards = {
  title: 'This Sunday',
  cards: [cardData(1), cardData(2), cardData(3), cardData(4)],
};

export const OneCard = () => (
  <Box maxWidth={1060} margin="auto">
    <HorizontalCardListFeature
      data={{
        title: 'This Sunday',
        cards: [cardData('BigCard')],
      }}
    />
  </Box>
);

export const Default = () => (
  <Box maxWidth={1060} margin="auto">
    <HorizontalCardListFeature data={{ ...multipleCards }} />
  </Box>
);

export const HighlightSmall = () => (
  <Box maxWidth={1060} margin="auto">
    <HorizontalCardListFeature
      data={{ ...multipleCards, cardType: 'HIGHLIGHT_SMALL' }}
    />
  </Box>
);

export const HighlightMedium = () => (
  <Box maxWidth={1060} margin="auto">
    <HorizontalCardListFeature
      data={{ ...multipleCards, cardType: 'HIGHLIGHT_MEDIUM' }}
    />
  </Box>
);
