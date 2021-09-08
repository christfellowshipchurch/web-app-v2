import React, { useState } from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

import { slugify } from 'utils';
import { GroupManageProvider } from 'providers';
import { Box, Card } from 'ui-kit';
import { CustomLink } from 'components';

// todo : figure out where/how to support this
import GroupManagePhoto from './GroupManagePhoto';
import GroupManageResources from './GroupManageResources';
import GroupManageMembers from './GroupManageMembers';
function GroupManage(props = {}) {
  return (
    <GroupManageProvider groupData={props.data}>
      <Box>
        <Box mb="l">
          <CustomLink href={`/group/${slugify(props?.data?.title)}`}>
            &larr; Back
          </CustomLink>
          <Box as="h1">{props?.data?.title}</Box>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={{ _: '1fr', md: '40% 1fr' }}
          gridColumnGap="base"
          columnGap="15px"
          rowGap="15px"
          // ! : keep for backwards css compatibility
          gridColumnGap="15px"
          gridRowGap="15px"
        >
          <Card p="base">
            <GroupManageResources />
          </Card>

          <Card p="base">
            <GroupManageMembers />
          </Card>
        </Box>
      </Box>
    </GroupManageProvider>
  );
}

GroupManage.propTypes = {
  data: PropTypes.object,
};

export default GroupManage;
