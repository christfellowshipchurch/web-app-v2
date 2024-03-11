import React from 'react';

import { Button } from 'ui-kit';
import Menu from './Menu';

export default {
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => (
  <Menu
    renderTrigger={({ toggle }) => <Button onClick={toggle}>Toggle</Button>}
  >
    Hello there!
  </Menu>
);
