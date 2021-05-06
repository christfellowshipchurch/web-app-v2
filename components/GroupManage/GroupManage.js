import React, { useState } from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

import { slugify } from 'utils';
import { GroupManageProvider } from 'providers';
import { initialState } from 'providers/GroupManageProvider';
import { Box, Card, List } from 'ui-kit';
import { CustomLink } from 'components';

import GroupManagePhoto from './GroupManagePhoto';
import GroupManageResources from './GroupManageResources';

function GroupManage(props = {}) {
  const [section, setSection] = useState(initialState.sections.photo);

  const handleSectionClick = section => event => {
    event.preventDefault();
    setSection(section);
  };

  function render() {
    switch (section) {
      case initialState.sections.photo: {
        return <GroupManagePhoto />;
      }
      case initialState.sections.resources: {
        return <GroupManageResources />;
      }
      default: {
        return null;
      }
    }
  }

  return (
    <GroupManageProvider groupData={props.data}>
      <Box
        display={{ lg: 'grid' }}
        gridTemplateColumns="25% 1fr"
        gridColumnGap="xl"
      >
        <Box mb={{ _: 'l', lg: '0' }}>
          <CustomLink href={`/groups/${slugify(props?.data?.title)}`}>
            &larr; Back
          </CustomLink>
          <Box my="base">
            {/* TODO: Make this a `<Label>` ui-kit component. */}
            <Box
              as="b"
              color="subdued"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="1px"
              textTransform="uppercase"
            >
              Edit
            </Box>
            <Box as="h1" fontSize="h3">
              {props?.data?.title}
            </Box>
          </Box>
          <Card boxShadow="base" p="base">
            <List>
              {Object.values(initialState.sections).map((_section, idx) => (
                <Box as="li" key={idx}>
                  <Box
                    as="a"
                    href="#0"
                    onClick={handleSectionClick(_section)}
                    color={section === _section ? 'fg' : 'primary'}
                    textDecoration="none"
                  >
                    Update {capitalize(_section)}
                  </Box>
                </Box>
              ))}
            </List>
          </Card>
        </Box>
        <Box>{render()}</Box>
      </Box>
    </GroupManageProvider>
  );
}

GroupManage.propTypes = {
  data: PropTypes.object,
};

export default GroupManage;
