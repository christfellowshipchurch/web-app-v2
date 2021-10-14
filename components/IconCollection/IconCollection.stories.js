import React from 'react';

import { Box } from 'ui-kit';

import { IconCollection } from 'components';

import testImage from '../../public/external-home-1.png' 

export default {
  title: 'components/IconCollection',
  component: IconCollection,
};

const data = [
    {
      title: '78,350',
      subtitle:
        'Water projects funded',
      image: testImage,
      highlightWidth: '100%',
      highlightWidthSmall: '10%',
    },
    {
      title: '13,086,400',
      subtitle:
        'People will be served',
      image: testImage,
      highlightWidth: '100%',
      highlightWidthSmall: '80%',
    },
    {
      title: '29',
      subtitle:
        'Countries',
      image: testImage,
      highlightWidth: '100%',
      highlightWidthSmall: '80%',
    },
  ];

export const Default = () => (
  <Box px="base" bg="white">
    <IconCollection icons={data} />
  </Box>
);

