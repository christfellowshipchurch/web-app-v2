import React from 'react';
import PropTypes from 'prop-types';

import { Box, List } from 'ui-kit';

import RemoveResourceLink from './RemoveResourceLink';

function ResourcesList(props = {}) {
  return (
    <List>
      {props.resources.map((resource, idx) => (
        <Box as="li" key={idx} display="flex">
          <RemoveResourceLink groupId={props.groupId} resource={resource} />
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

ResourcesList.propTypes = {
  groupId: PropTypes.string,
  resources: PropTypes.array,
};

export default ResourcesList;
