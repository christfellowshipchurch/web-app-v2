import React from 'react';

import ActionBar from './ActionBar';
import ActionBarItem from './ActionBarItem';

export default {
  component: ActionBar,
  tags: ['autodocs'],
};

const data = {
  children: [
    { icon: 'x', label: 'Hello', tint: '' },
    { icon: 'x', label: 'There', tint: '' },
    { icon: 'x', label: 'WOOHOO', tint: '' },
  ],
};

export const Default = () => (
  <ActionBar>
    {data.children.map((child, i) => {
      return (
        <ActionBarItem
          icon={child.icon}
          label={child.label}
          tint={child.tint}
        />
      );
    })}
  </ActionBar>
);
