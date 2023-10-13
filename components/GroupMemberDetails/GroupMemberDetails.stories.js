/**
 * GroupMemberDetails.stories.js
 *
 * Author: Caleb Panza
 * Created: Sep 07, 2021
 *
 * Interactive story to display all the different states of a Group Member Details
 */

import React from 'react';

import GroupMemberDetails from './GroupMemberDetails';
import { Box } from 'ui-kit';

const config = {
  title: 'components/GroupMemberDetails',
  component: GroupMemberDetails,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

const groupMemberStatuses = [
  {
    id: 'GroupMemberStatus:3488e26db0f447696713d54c3174653b',
    label: 'Inactive',
  },
  {
    id: 'GroupMemberStatus:559b23fd0aa90e81b1c023e72e230fa1',
    label: 'Active',
  },
  {
    id: 'GroupMemberStatus:965b6e6d7046a885bea4e300b5c0400d',
    label: 'Pending',
  },
];
const inactiveStatusReasons = [
  {
    id: 'DefinedValue:1903b8bce8b6cdc96e1cf7969f1906eb',
    value: 'No Response',
  },
  {
    id: 'DefinedValue:0dd94a5ef16ecd066467b1b9215be8a4',
    value: 'Switched groups',
  },
  {
    id: 'DefinedValue:0a0184906320ecab06bf391f3f22f323',
    value: 'No longer interested',
  },
  {
    id: 'DefinedValue:77ec3a1654b648a2d89b00d3ca758bcb',
    value: 'Moved/Passed Away',
  },
];

const GroupMemberDetailsStory = () => {
  const groupMember = {
    status: {
      id: 'some-status-identifier',
      label: 'status',
    },
    role: 'Member',
    person: {
      firstName: 'Ted',
      lastName: 'Lasso',
      photo: {
        uri: 'https://source.unsplash.com/random',
      },
      phoneNumber: '(555) 555-5555',
      email: 'email@domain.com',
      address: {
        city: 'West Palm Beach',
        state: 'FL',
        postalCode: 33417,
        street1: '123 Main St',
      },
    },
  };

  return (
    <Box maxWidth="300px">
      <GroupMemberDetails
        {...groupMember}
        groupMemberStatuses={groupMemberStatuses}
        inactiveStatusReasons={inactiveStatusReasons}
      />
    </Box>
  );
};

export const Default = GroupMemberDetailsStory.bind({});
Default.args = {};

export default config;
