import React from 'react';

import { Box } from 'ui-kit';

import { AvatarListFeature } from 'components';

export default {
  title: 'components/AvatarListFeature',
  component: AvatarListFeature,
};

const avatarData = {
  data: {
    people: [
      {
        firstName: 'John',
        lastName: 'Smith',
        photo: {
          uri: 'https://source.unsplash.com/random/1000x1000',
        },
        campus: {
          name: 'Palm Beach Gardens',
        },
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        photo: {
          uri: 'https://source.unsplash.com/random/1000x1000',
        },
        campus: {
          name: 'Palm Beach Gardens',
        },
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        photo: {
          uri: 'https://source.unsplash.com/random/1000x1000',
        },
        campus: {
          name: 'Palm Beach Gardens',
        },
      },
    ],
  },
};

export const Default = () => (
  <Box maxWidth={1060} margin="auto">
    <AvatarListFeature {...avatarData} />
  </Box>
);
