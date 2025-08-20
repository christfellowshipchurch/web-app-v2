import React from 'react';
import PropTypes from 'prop-types';

import { Box, Avatar, Icon } from 'ui-kit';

const AvatarListFeature = ({
  data: { people, primaryAction, isLoading },
  onPressActionItem,
}) => {
  if (!Array.isArray(people)) return null;

  return (
    <>
      {people.map(person => (
        <Box
          key={person.id}
          display="flex"
          flexDirection="column"
          width="100%"
          justifyContent="center"
          alignItems="center"
          mb="-72px"
        >
          <Box
            as="a"
            href="profile"
            cursor="pointer"
            onClick={e => onPressActionItem(e, primaryAction)}
            position="relative"
            mb="base"
          >
            <Avatar
              name={person.firstName}
              src={person.photo.uri}
              height="128px"
              width="128px"
            />
            {primaryAction?.icon && (
              <Box
                bg="paper"
                borderRadius="9999px"
                bottom={0}
                boxShadow="base"
                display="flex"
                p="xs"
                position="absolute"
                right={0}
              >
                <Icon
                  color={primaryAction?.theme?.color}
                  name={primaryAction?.icon}
                  size="24"
                />
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              as="h3"
              isLoading={isLoading}
              mb={0}
            >{`${person?.firstName} ${person?.lastName}`}</Box>
            {person?.campus?.name && (
              <Box as="p" color="neutrals.500" isLoading={isLoading}>
                {person?.campus?.name}
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
};

AvatarListFeature.propTypes = {
  onPressItem: PropTypes.func,
  isLoading: PropTypes.bool,
  primaryAction: PropTypes.shape({
    action: PropTypes.string,
    icon: PropTypes.string,
    theme: PropTypes.shape({}),
    relatedNode: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.shape({}),
      photo: PropTypes.shape({
        uri: PropTypes.string,
      }),
      campus: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    })
  ),
};

AvatarListFeature.defaultProps = {
  isLoading: false,
  people: [],
};

export default AvatarListFeature;
