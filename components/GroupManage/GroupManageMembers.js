/**
 * GroupManageMembers.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * List of Group Members that can be searched and filtered. When the current person is a leader of the group, they will also be able to see management tools.
 */

import React from 'react';

import { GroupResourceOptionsProvider } from 'providers';
import { useGroupManage, update } from 'providers/GroupManageProvider';
import { SearchField } from 'components';
import { Box, Button, Icon, List, Menu } from 'ui-kit';
import { CardTitle, SmallPillButton } from './GroupManage.components';

function GroupManageMembers(props = {}) {
  return (
    <>
      <Box alignItems="center" display="flex" mb="base">
        <CardTitle title="Group Members" />

        <SmallPillButton
          onClick={() => null}
          icon="plus"
          title="Add New Member"
        />
      </Box>
      <SearchField />
    </>
  );
}

export default GroupManageMembers;
