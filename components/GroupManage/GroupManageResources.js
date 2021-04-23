import React from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { Box, Button } from 'ui-kit';
import { CustomLink } from 'components';

import AddResourceContent from './AddResourceContent';
import AddResourceLink from './AddResourceLink';
import ResourcesList from './ResourcesList';

function GroupManageResources(props = {}) {
  const [{ resourceStatus: status }, dispatch] = useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));

  function handleAddClick(event) {
    event.preventDefault();
    setStatus(status === 'IDLE' ? 'ADD' : 'IDLE');
  }

  function handleAddLinkClick(event) {
    event.preventDefault();
    setStatus('ADD_LINK');
  }

  function handleAddContentClick(event) {
    event.preventDefault();
    setStatus('ADD_CONTENT');
  }

  function render() {
    if (status === 'IDLE') {
      return (
        <ResourcesList
          groupId={props.data?.id}
          resources={props.data?.resources}
        />
      );
    }

    if (status === 'ADD') {
      return (
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 50%)"
          gridColumnGap="l"
        >
          <Button
            variant="secondary"
            onClick={handleAddLinkClick}
            display="block"
          >
            Add URL
          </Button>
          <Button
            variant="secondary"
            onClick={handleAddContentClick}
            display="block"
          >
            Add Study
          </Button>
        </Box>
      );
    }

    if (status === 'ADD_LINK') {
      return <AddResourceLink groupId={props.data.id} />;
    }

    if (status === 'ADD_CONTENT') {
      return <AddResourceContent />;
    }

    return null;
  }

  return (
    <>
      <Box alignItems="center" display="flex" mb="base">
        <Box as="h2" flexGrow="1" mb="0">
          Resources
        </Box>
        <CustomLink href="#0" onClick={handleAddClick}>
          {status === 'IDLE' ? 'Add' : 'Cancel'}
        </CustomLink>
      </Box>
      {render()}
    </>
  );
}

GroupManageResources.propTypes = {
  data: PropTypes.object,
};

export default GroupManageResources;
