import React from 'react';

import { Box } from 'ui-kit';

import { ActionListFeature } from 'components';

const config = {
  component: ActionListFeature,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
    },
  },
};

const card = {
  __typename: 'ActionListFeatureAction',
  id: 'ActionListFeatureAction',
  title: 'Action Title',
  subtitle: 'Description of the card...',
  action: 'READ_CONTENT',
  image: {
    __typename: 'ImageMedia',
    sources: [
      {
        __typename: 'ImageMediaSource',
        uri: 'https://picsum.photos/200/200',
      },
    ],
  },
  relatedNode: {
    __typename: 'UniversalContentItem',
    id: 'UniversalContentItem:123',
  },
};

function renderItems(n) {
  let arr = [];

  for (var i = 0; i < n; i++) {
    arr.push(card);
  }

  return arr;
}

const mockData = {
  id: 'ActionListFeature:123',
  __typename: 'ActionListFeature',
  title: 'Action List Feature Title',
  subtitle: 'Subtitle',
  primaryAction: {
    __typename: 'ActionFeatureAction',
    action: 'OPEN_URL',
    title: 'Check this out',
    relatedNode: {
      __typename: 'Url',
      id: 'Url:123',
      url: 'https://www.google.com',
    },
  },
};

const ActionListFeatureStory = ({ items = 1 }) => {
  return (
    <Box maxWidth={1060} margin="auto">
      <ActionListFeature data={{ ...mockData, actions: renderItems(items) }} />
    </Box>
  );
};

ActionListFeatureStory.defaultProps = {
  items: 1,
};

export const Default = ActionListFeatureStory.bind({});

export default config;
