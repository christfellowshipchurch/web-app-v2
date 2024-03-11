import React from 'react';
import { Box } from 'ui-kit';

import Button from './Button';

export default {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

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

export const Chip = () => (
  <Box flexDirection="column" bg="white" padding="l">
    <Box mb="l">
      <Box as="h5">Default</Box>
      <Button variant="chip" mr="s">
        Chip
      </Button>
      <Button variant="chip" status="SELECTED" mr="s">
        Selected Chip
      </Button>
    </Box>
    <Box mb="l">
      <Box as="h5">Rounded</Box>
      <Button rounded={true} variant="chip" mr="s">
        Chip (Rounded)
      </Button>
      <Button rounded={true} variant="chip" status="SELECTED" mr="s">
        Selected Chip (Rounded)
      </Button>
    </Box>
    <Box mb="l">
      <Box as="h5">Small &amp; Rounded</Box>
      <Button rounded={true} variant="chip" size="s" mr="s">
        Chip (Small, Rounded)
      </Button>
      <Button rounded={true} variant="chip" size="s" status="SELECTED" mr="s">
        Selected Chip (Small, Rounded)
      </Button>
    </Box>
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
