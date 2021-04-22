import React from 'react';
import PropTypes from 'prop-types';

import { Box, Avatar, Icon } from 'ui-kit';

const AvatarListFeature = ({
  data: { people, onPressItem, primaryAction, isLoading },
}) => {
  console.log({ people });

  return (
    <>
      {people.map(person => (
        <Box key={person.id} display="flex">
          <Box
            cursor="pointer"
            mr="base"
            onClick={() => onPressItem(primaryAction)}
            position="relative"
          >
            <Avatar
              name={person.firstName}
              src={person.photo.uri}
              height="80px"
              width="80px"
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
                  size="18"
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
