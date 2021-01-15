import React from 'react';

import { Box, Card, ThemeProvider } from 'ui-kit';

export default {
  title: 'Colors',
};

const Swatch = (props = {}) => (
  <Box m="base" textAlign="center">
    <Box
      bg={props.color}
      border="1px solid"
      borderColor={props.borderColor || 'transparent'}
      borderRadius="2px"
      mb="xs"
      mx="auto"
      size="40px"
    />
    <Box as="p" color="secondary" fontSize="xxs">
      {props.label}
    </Box>
  </Box>
);

export const Light = () => (
  <>
    <Box display="flex">
      <Swatch color="primary" label="Primary" />
      <Swatch color="secondary" label="Secondary" />
      <Swatch color="tertiary" label="Tertiary" />
    </Box>
    <Box display="flex">
      <Swatch color="neutrals.100" label="Neutral 100" borderColor="border" />
      <Swatch color="neutrals.200" label="Neutral 200" />
      <Swatch color="neutrals.300" label="Neutral 300" />
      <Swatch color="neutrals.400" label="Neutral 400" />
      <Swatch color="neutrals.500" label="Neutral 500" />
      <Swatch color="neutrals.600" label="Neutral 600" />
      <Swatch color="neutrals.700" label="Neutral 700" />
      <Swatch color="neutrals.800" label="Neutral 800" />
      <Swatch color="neutrals.900" label="Neutral 900" />
    </Box>
    <Box display="flex">
      <Swatch color="alert" label="Alert" />
      <Swatch color="warning" label="Warning" />
      <Swatch color="success" label="Success" />
      <Swatch color="wordOfChrist" label="Word of Christ" />
    </Box>
    <Box display="flex">
      <Swatch color="screen" label="Screen" borderColor="border" />
      <Swatch color="paper" label="Paper" />
    </Box>
    <Box display="flex">
      <Swatch color="black" label="Black" />
      <Swatch color="white" label="White" />
    </Box>
  </>
);

export const Dark = () => (
  <ThemeProvider mode="dark">
    <Card boxShadow="s" bg="black">
      <Box display="flex">
        <Swatch color="primary" label="Primary" />
        <Swatch color="secondary" label="Secondary" />
        <Swatch color="tertiary" label="Tertiary" />
      </Box>
      <Box display="flex">
        <Swatch color="neutrals.100" label="Neutral 100" />
        <Swatch color="neutrals.200" label="Neutral 200" />
        <Swatch color="neutrals.300" label="Neutral 300" />
        <Swatch color="neutrals.400" label="Neutral 400" />
        <Swatch color="neutrals.500" label="Neutral 500" />
        <Swatch color="neutrals.600" label="Neutral 600" />
        <Swatch color="neutrals.700" label="Neutral 700" />
        <Swatch color="neutrals.800" label="Neutral 800" />
        <Swatch color="neutrals.900" label="Neutral 900" />
      </Box>
      <Box display="flex">
        <Swatch color="alert" label="Alert" />
        <Swatch color="warning" label="Warning" />
        <Swatch color="success" label="Success" />
        <Swatch color="wordOfChrist" label="Word of Christ" />
      </Box>
      <Box display="flex">
        <Swatch color="screen" label="Screen" />
        <Swatch color="paper" label="Paper" />
      </Box>
      <Box display="flex">
        <Swatch color="black" label="Black" borderColor="screen" />
        <Swatch color="white" label="White" />
      </Box>
    </Card>
  </ThemeProvider>
);
