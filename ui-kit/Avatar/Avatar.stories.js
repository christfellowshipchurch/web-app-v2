import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'ui-kit/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Avatar
    src="https://source.unsplash.com/random/200x200"
    height="100px"
    width="100px"
  />
);
