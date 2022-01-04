import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { useGroupManageState } from 'providers/GroupManageProvider';
import { Box, Icon, List } from 'ui-kit';

import RemoveResourceLink from './RemoveResourceLink';

function ResourceCoverImage(props = {}) {
  const { coverImage } = props;
  const coverImageUri = coverImage?.sources[0]?.uri;
  const hasCoverImage = !isEmpty(coverImageUri);
  const height = 56;
  const width = 66;

  return (
    <Box
      height={`${height}px`}
      width={`${width}px`}
      borderRadius="base"
      backgroundColor="neutrals.400"
      justifyContent="center"
      alignItems="center"
      display="flex"
      backgroundImage={`url(${coverImageUri})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {!hasCoverImage && <Icon name="link" color="white" size={'32'} />}
    </Box>
  );
}

function ResourcesList(props = {}) {
  const { groupData } = useGroupManageState();

  return (
    <List>
      {groupData?.resources?.map(
        (resource, idx) =>
          resource?.title && (
            <Box as="li" key={idx} display="flex" alignItems="center">
              <ResourceCoverImage {...resource?.relatedNode} />
              <Box flex="1" mx="s">
                <Box as="b" fontWeight="bold">
                  {resource?.title}
                </Box>
                {resource?.relatedNode.url ? (
                  <Box
                    as="span"
                    color="neutrals.500"
                    display="block"
                    fontSize="s"
                    // TODO: This shouldn't be an inline style.
                    style={{ wordBreak: 'break-word' }}
                  >
                    {resource?.relatedNode.url}
                  </Box>
                ) : null}
              </Box>

              <RemoveResourceLink resource={resource} />
            </Box>
          )
      )}
    </List>
  );
}

export default ResourcesList;
