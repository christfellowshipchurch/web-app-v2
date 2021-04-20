import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, List } from 'ui-kit';
import { CustomLink } from 'components';

function GroupManageResources(props = {}) {
  // IDLE, ADD, ADD_LINK, ADD_CONTENT
  const [status, setStatus] = useState('IDLE');

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
            <Box as="li" key={idx}>
              <Box as="b" fontWeight="bold">
                {resource?.title}
              </Box>
              {resource?.relatedNode.url ? (
                // TODO: We need `word-break: break-word` for long links.
                <Box as="span" color="subdued" display="block" fontSize="s">
                  {resource?.relatedNode.url}
                </Box>
              ) : null}
            </Box>
          ))}
        </List>
      );
    }

    if (status === 'ADD') {
      return (
        <Box display="grid" gridTemplateColumns="repeat(2, 50%)">
          <Box as="a" href="#0" onClick={handleAddLinkClick}>
            Link
          </Box>
          <Box as="a" href="#0" onClick={handleAddContentClick}>
            Content
          </Box>
        </Box>
      );
    }

    if (status === 'ADD_LINK') {
      return <Box as="p">Add a link!</Box>;
    }

    if (status === 'ADD_CONTENT') {
      return <Box as="p">Add content!</Box>;
    }

    return null;
  }

  return (
    <>
      <Box alignItems="center" display="flex" mb="s">
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
