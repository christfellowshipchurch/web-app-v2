import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { Box, utils } from 'ui-kit';
import { CustomLink } from 'components';

import GroupManagePhoto from './GroupManagePhoto';
import GroupManageResources from './GroupManageResources';

function GroupManage(props = {}) {
  return (
    <Box maxWidth={utils.rem('600px')} mx="auto">
      <CustomLink href={`/groups/${slugify(props?.data?.title)}`}>
        &larr; Back to my group
      </CustomLink>
      <Box mb="l" mt="base">
        {/* TODO: Make this a `<Label>` ui-kit component. */}
        <Box
          as="b"
          color="subdued"
          fontSize="xs"
          fontWeight="bold"
          letterSpacing="1px"
          textTransform="uppercase"
        >
          Manage
        </Box>
        <Box as="h1">{props?.data?.title}</Box>
      </Box>
      <Box mb="l">
        <GroupManagePhoto data={props.data} />
      </Box>
      <Box mb="l">
        <GroupManageResources data={props.data} />
      </Box>
    </Box>
  );
}

GroupManage.propTypes = {
  data: PropTypes.object,
};

export default GroupManage;
