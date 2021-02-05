import React from 'react';
import { Box } from 'ui-kit';

import Button from './Button';

export default {
  title: 'ui-kit/Button',
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Sizes = () => (
  <Box>
    <Button size="l" mr="s">
      Large (Default)
    </Button>
    <Button size="s">Small</Button>
  </Box>
);

export const Variants = () => (
  <Box>
    <Button variant="primary" mr="s">
      Primary
    </Button>
    <Button variant="secondary" mr="s">
      Secondary
    </Button>
    <Button variant="tertiary" mr="s">
      Tertiary
    </Button>
  </Box>
);

export const Rounded = () => (
  <Box>
    <Button rounded={true} variant="primary" mr="s">
      Rounded Primary
    </Button>
    <Button rounded={true} variant="secondary" mr="s">
      Rounded Secondary
    </Button>
    <Button rounded={true} variant="tertiary" mr="s">
      Rounded Tertiary
    </Button>
  </Box>
);

export const Loading = () => <Button status="LOADING">Button</Button>;
