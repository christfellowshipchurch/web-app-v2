import React from 'react';

import { ContentBlockCollection } from 'components';

const config = {
  title: 'components/ContentBlockCollection',
  component: ContentBlockCollection,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
    },
  },
};

function renderItems(n) {
  let arr = [];

  for (var i = 0; i < n; i++) {
    arr.push({
      title: '78,350',
      summary: 'Water projects funded',
      coverImage: {
        sources: [{ uri: 'https://picsum.photos/300/300' }],
      },
      highlightWidth: '100%',
      highlightWidthSmall: '10%',
    });
  }

  return arr;
}

const ContentBlockCollectionStory = ({ items = 1 }) => {
  return <ContentBlockCollection data={{ cards: renderItems(items) }} />;
};

export const Default = ContentBlockCollectionStory.bind({});

export default config;
