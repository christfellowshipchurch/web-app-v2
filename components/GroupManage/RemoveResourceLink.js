import React from 'react';
import PropTypes from 'prop-types';

import { useRemoveGroupResource } from 'hooks';
import { Box, Icon } from 'ui-kit';

function RemoveResourceLink(props = {}) {
  const [removeResource] = useRemoveGroupResource();

  async function handleRemoveClick(event) {
    event.preventDefault();

    // eslint-disable-next-line
    const confirmation = confirm(
      'Are you sure you want to delete this resource?'
    );
    if (!confirmation) return;

    await removeResource({
      variables: {
        groupId: props.groupId,
        relatedNodeId: props.resource.relatedNode.id,
      },
      refetchQueries: ['getGroup'],
    });
  }

  return (
    <Box
      as="a"
      href="#0"
      onClick={handleRemoveClick}
      mr="s"
      position="relative"
      top="-1px"
    >
      <Icon name="x" color="alert" />
    </Box>
  );
}

RemoveResourceLink.propTypes = {
  groupId: PropTypes.string,
  resource: PropTypes.object,
};

export default RemoveResourceLink;
