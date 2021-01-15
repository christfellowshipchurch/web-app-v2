import React from 'react';

import { Button } from 'ui-kit';
import Menu from './Menu';

export default {
  title: 'ui-kit/Menu',
  component: Menu,
};

export const Default = () => (
  <Menu
    renderTrigger={({ toggle }) => <Button onClick={toggle}>Toggle</Button>}
  >
    Hello!
  </Menu>
);
