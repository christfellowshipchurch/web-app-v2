import React from 'react';

import SquareAvatar from './SquareAvatar';

export default {
  component: SquareAvatar,
  tags: ['autodocs'],
};

export const Default = () => (
  <SquareAvatar
    src="https://source.unsplash.com/random/200x200"
    height="100px"
    width="100px"
    name="Square Avatar"
  />
);
