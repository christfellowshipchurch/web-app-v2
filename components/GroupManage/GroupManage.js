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
          display={{ lg: 'grid' }}
          gridTemplateColumns="40% 1fr"
          gridColumnGap="base"
        >
          <Card p="base" m={{ _: 'base', lg: '0' }}>
            <GroupManageResources />
          </Card>

          <Card p="base" m={{ _: 'base', lg: '0' }}>
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
