/**
 * GroupMember.stories.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * Interactive story to display all the different states of a Group Member
 */

import GroupMember from './GroupMember';

const statuses = {
  active: { id: '123', label: 'Active' },
  inactive: { id: '234', label: 'Inactive' },
  pending: { id: '456', label: 'Pending' },
};

const roleIds = {
  isHubLeader: '48',
  notHubLeader: 'null',
};

export default {
  component: GroupMember,
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: Object.keys(statuses),
      mapping: statuses,
      control: {
        type: 'radio',
      },
    },
    role: {
      options: ['Leader', 'Member'],
      control: {
        type: 'radio',
      },
    },
    groupRoleId: {
      options: Object.keys(roleIds),
      mapping: roleIds,
      control: {
        type: 'select',
      },
    },
  },
};

export const Default = {
  args: {
    status: {
      id: 'some-status-identifier',
      label: 'Active',
    },
    role: 'Leader',
    person: {
      firstName: 'Ted',
      lastName: 'Lasso',
      photo: {
        uri: 'https://source.unsplash.com/random',
      },
    },
  },
};
