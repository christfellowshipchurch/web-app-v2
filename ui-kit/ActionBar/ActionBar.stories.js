import React from 'react';

import ActionBar from './ActionBar';
import ActionBarItem from './ActionBarItem';

export default {
  title: 'ui-kit/ActionBar',
  component: ActionBar,
};

export const Default = () => (
  <ActionBar>
    <ActionBarItem icon="x" label="Hello" tint="" />
    <ActionBarItem icon="x" label="There" tint="" />
    <ActionBarItem icon="x" label="WOOHOO" tint="" />
  </ActionBar>
);
