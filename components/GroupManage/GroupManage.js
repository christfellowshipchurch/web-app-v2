import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { Box, List, utils } from 'ui-kit';
import { CustomLink } from 'components';

import GroupManagePhoto from './GroupManagePhoto';

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
        <Resources data={props.data} />
      </Box>
    </Box>
  );
}

function Resources(props = {}) {
  return (
    <>
      <Box alignItems="center" display="flex" mb="s">
        <Box as="h2" flexGrow="1" mb="0">
          Resources
        </Box>
        <CustomLink href="#0">Add</CustomLink>
      </Box>
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
    </>
  );
}

GroupManage.propTypes = {
  data: PropTypes.object,
};

export default GroupManage;
