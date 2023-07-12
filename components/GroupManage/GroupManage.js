import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { GroupManageProvider } from 'providers';
import { Box, Button, Card } from 'ui-kit';

// todo : figure out where/how to support this
import GroupManageResources from './GroupManageResources';
import GroupManageMembers from './GroupManageMembers';
function GroupManage(props = {}) {
  const router = useRouter()

  return (
    <GroupManageProvider groupData={props.data}>
      <Box>
        <Box mb="l">
          <Button 
              ml="-1rem"
              variant="link"
              onClick={() => router.back()}
          >
              &larr; Back
          </Button>
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
