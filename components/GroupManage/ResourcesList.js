import React from 'react';

import { useGroupManageState } from 'providers/GroupManageProvider';
import { Box, List } from 'ui-kit';

import RemoveResourceLink from './RemoveResourceLink';

function ResourcesList(props = {}) {
  const { groupData } = useGroupManageState();

  return (
    <List>
      {groupData.resources.map(
        (resource, idx) =>
          resource?.title && (
            <Box as="li" key={idx} display="flex">
              <RemoveResourceLink resource={resource} />
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
          )
      )}
    </List>
  );
}

export default ResourcesList;
