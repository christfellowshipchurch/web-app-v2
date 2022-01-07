/**
 * GroupMemberDetails.components.js
 *
 * Author: Caleb Panza
 * Created: Sep 07, 2021
 *
 * Single Group Member that can be viewed and edited.
 */

import React from 'react';

import { Box } from 'ui-kit';

export const Label = ({ children }) => (
  <Box as="h6" mb="3px">
    {children}
  </Box>
);

export const Row = ({ label, children }) => (
  <Box my="s">
    <Label>{label}</Label>
    {children}
  </Box>
);
