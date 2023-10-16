/**
 * GroupMember.stories.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * Interactive story to display all the different states of a Group Member
 */

import React from 'react';

import GroupMember from './GroupMember';
import { Box } from 'ui-kit';

const config = {
  title: 'components/GroupMember',
  component: GroupMember,
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: ['Active', 'Inactive', 'Pending'],
      control: { type: 'radio' },
    },
    role: {
      options: ['Member', 'Leader'],
      control: { type: 'radio' },
    },
    firstName: {
      control: { type: 'text' },
    },
    lastName: {
      control: { type: 'text' },
    },
  },
};

const GroupMemberStory = ({ status, role, firstName, lastName }) => {
  const groupMember = {
    status: {
      id: 'some-status-identifier',
      label: 'Active',
    },
    role,
    person: {
      firstName,
      lastName,
      photo: {
        uri: 'https://source.unsplash.com/random',
      },
    },
  };

  return (
    <Box maxWidth="300px">
      <GroupMember data={{ ...groupMember }} />
    </Box>
  );
};

export const Default = GroupMemberStory.bind({});
Default.args = {
  status: {
    id: 'some-status-identifier',
    label: 'Active',
  },
  role: 'Member',
  person: {
    firstName: 'Ted',
    lastName: 'Lasso',
    photo: {
      uri: 'https://source.unsplash.com/random',
    },
  },
};

export default config;
