import React from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { Box, Button, List } from 'ui-kit';
import { CustomLink } from 'components';

import AddResourceContent from './AddResourceContent';
import AddResourceLink from './AddResourceLink';
import RemoveResourceLink from './RemoveResourceLink';

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
        <List>
          {props?.data?.resources.map((resource, idx) => (
            <Box as="li" key={idx} display="flex">
              <RemoveResourceLink groupId={props.data.id} resource={resource} />
              <Box flex="1">
                <Box as="b" fontWeight="bold">
                  {resource?.title}
                </Box>
                {resource?.relatedNode.url ? (
                  <Box
                    as="span"
                    color="subdued"
                    display="block"
                    fontSize="s"
                    // TODO: This shouldn't be an inline style.
                    style={{ wordBreak: 'break-word' }}
                  >
                    {resource?.relatedNode.url}
                  </Box>
                ) : null}
              </Box>
            </Box>
          ))}
        </List>
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
