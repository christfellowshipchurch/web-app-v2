import React from 'react';

import Avatar from './Avatar';

export default {
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    height: {
      name: 'Height',
      control: 'text',
    },
    name: {
      name: 'Name',
      control: 'text',
    },
    src: {
      name: 'Source',
      control: 'text',
    },
    width: {
      name: 'Width',
      control: 'text',
    },
  },
};

export const Default = {
  args: { height: '64', name: 'Jane Doe', width: '64', src: '' },
};
