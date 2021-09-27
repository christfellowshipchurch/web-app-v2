import React from 'react';

import { GroupResourceOptionsProvider } from 'providers';
import { useGroupManage, update } from 'providers/GroupManageProvider';
import { Box, Icon, List, Menu } from 'ui-kit';

import AddResourceContent from './AddResourceContent';
import AddResourceLink from './AddResourceLink';
import ResourcesList from './ResourcesList';

function GroupManageResources(props = {}) {
  const [{ resourceStatus: status, groupData }, dispatch] = useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));
  const currentResources = groupData?.resources?.map(
    ({ relatedNode }) => relatedNode.id
  );

  const handleAddLinkClick = toggle => event => {
    event.preventDefault();
    setStatus('ADD_LINK');
    toggle(event);
  };

  const handleAddContentClick = toggle => event => {
    event.preventDefault();
    setStatus('ADD_CONTENT');
    toggle(event);
  };

  function render() {
    if (status === 'IDLE') {
      return <ResourcesList />;
    }

    if (status === 'ADD_LINK') {
      return <AddResourceLink />;
    }

    if (status === 'ADD_CONTENT') {
      return (
        <GroupResourceOptionsProvider
          Component={AddResourceContent}
          currentResources={currentResources}
          options={{ variables: { groupId: groupData.id } }}
        />
      );
    }

    return null;
  }

  return (
    <>
      <Box alignItems="center" display="flex" mb="base">
        <Box as="h2" flexGrow="1" mb="0">
          Resources
        </Box>
        <Menu
          renderTrigger={({ toggle }) => (
            <Box
              pl="xs"
              py="xs"
              border={'2px solid'}
              backgroundColor="white"
              borderRadius="7px"
              as="a"
              href="#0"
              onClick={toggle}
              textDecoration="none"
              fontWeight="bold"
            >
              Add <Icon name="caretDown" position="relative" top="2px" />
            </Box>
          )}
          side="right"
        >
          {toggle => (
            <List py="s">
              <Box as="li">
                <Box
                  as="a"
                  href="#0"
                  onClick={handleAddLinkClick(toggle)}
                  display="block"
                  px="s"
                  textDecoration="none"
                >
                  Add URL
                </Box>
              </Box>
              <Box as="li">
                <Box
                  as="a"
                  href="#0"
                  onClick={handleAddContentClick(toggle)}
                  display="block"
                  px="s"
                  textDecoration="none"
                >
                  Add Content
                </Box>
              </Box>
            </List>
          )}
        </Menu>
      </Box>
      {render()}
    </>
  );
}

export default GroupManageResources;
