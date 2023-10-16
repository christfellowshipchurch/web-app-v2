import React from 'react';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  tags: ['autodocs'],
};

export const Default = () => (
  <Checkbox id="checkbox" label="This is the label" />
);
