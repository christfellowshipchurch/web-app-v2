import React from 'react';

import { Box } from 'ui-kit';

import { AvatarListFeature } from 'components';

const exportedObject = {
  title: 'components/AvatarListFeature',
  component: AvatarListFeature,
};

export default exportedObject;

const data = {
  onPressItem: () => {},
  primaryAction: {
    action: 'OPEN_URL',
    icon: 'settings',
    theme: {
      color: 'primary',
    },
    relatedNode: {
      id: 'UniversalContentItem:0123456789',
    },
  },
  people: [
    {
      id: 'Person:012345',
      firstName: 'Barry',
      lastName: 'Allen',
      photo: {
        uri: 'https://source.unsplash.com/random/1000x1000',
      },
      campus: {
        id: 'UniversalContentItem:0123456789',
        name: 'Online',
      },
    },
  ],
};

export const Default = () => (
  <Box maxWidth={1060} margin="auto">
    <AvatarListFeature data={data} />
  </Box>
);
