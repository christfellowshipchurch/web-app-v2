/**
 * GroupMember.stories.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * Story to display all the different statuses for a Group Member
 */

import React from 'react';

import GroupMemberStatusBadge from './GroupMemberStatusBadge';

const config = {
  component: GroupMemberStatusBadge,
  tags: ['autodocs'],
};

export const Inactive = () => {
  return <GroupMemberStatusBadge status="inactive" />;
};

export const Pending = () => {
  return <GroupMemberStatusBadge status="pending" />;
};

export const Active = () => {
  return (
    <i>
      Note : when the status is set to "active", this component will return
      `null`
    </i>
  );
};

export default config;
