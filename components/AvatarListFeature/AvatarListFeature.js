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
        <Box key={person.id} display="flex">
          <Box
            as="a"
            href="profile"
            cursor="pointer"
            mr="base"
            onClick={e => onPressActionItem(e, primaryAction)}
            position="relative"
          >
            <Avatar
              name={person.firstName}
              src={person.photo.uri}
              height="150px"
              width="150px"
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
                  size="36"
                />
              </Box>
            )}
          </Box>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Box
              as="h4"
              isLoading={isLoading}
              mb={0}
            >{`${person?.firstName} ${person?.lastName}`}</Box>
            {person?.campus?.name && (
              <Box as="p" fontSize="s" isLoading={isLoading}>
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
  /**
   * function to handle the press of an action item
   */
  onPressItem: PropTypes.func,
  /**
   * Whether or not the component is loading
   */
  isLoading: PropTypes.bool,
  /**
   * The primary action
   */
  primaryAction: PropTypes.shape({
    action: PropTypes.string,
    icon: PropTypes.string,
    theme: PropTypes.shape({}),
    relatedNode: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  /**
   * The person to be displayed
   */
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
