import React from 'react';

import SquareAvatar from './SquareAvatar';

export default {
  title: 'ui-kit/SquareAvatar',
  component: SquareAvatar,
};

export const Default = () => (
  <SquareAvatar
    src="https://source.unsplash.com/random/200x200"
    height="100px"
    width="100px"
    name="Square Avatar"
  />
);
