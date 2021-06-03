import React, { useState } from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

import { slugify } from 'utils';
import { GroupManageProvider } from 'providers';
import { initialState } from 'providers/GroupManageProvider';
import { Box, Card } from 'ui-kit';
import { CustomLink } from 'components';

import GroupManagePhoto from './GroupManagePhoto';
import GroupManageResources from './GroupManageResources';

function GroupManage(props = {}) {
  const [section, setSection] = useState(initialState.sections.resources);

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
          <CustomLink href={`/group/${slugify(props?.data?.title)}`}>
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
          <Card boxShadow="base">
            <Box display="flex" flexDirection="column">
              {Object.values(initialState.sections).map(
                (_section, idx, arr) => {
                  let borderRadius = {};

                  if (idx === 0) {
                    borderRadius = {
                      borderTopLeftRadius: '0.375rem',
                    };
                  }

                  if (idx === arr.length - 1) {
                    borderRadius = {
                      borderBottomLeftRadius: '0.375rem',
                    };
                  }

                  return (
                    <Box
                      key={idx}
                      width="100%"
                      p="s"
                      px="base"
                      onClick={handleSectionClick(_section)}
                      backgroundColor={
                        section === _section ? 'primarySubduedHover' : ''
                      }
                      borderLeft={section === _section ? '5px solid' : ''}
                      {...borderRadius}
                      color={section === _section ? 'primary' : 'neutrals.700'}
                      cursor="pointer"
                      fontWeight="bold"
                    >
                      Update {capitalize(_section)}
                    </Box>
                  );
                }
              )}
            </Box>
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
