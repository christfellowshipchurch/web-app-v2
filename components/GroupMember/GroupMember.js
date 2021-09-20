/**
 * GroupMember.js
 *
 * Author: Caleb Panza
 * Created: Sep 03, 2021
 *
 * Single Group Member that can be viewed and edited.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/client';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, GroupMemberStatusBadge, SquareAvatar } from 'ui-kit';
import { isEmpty } from 'lodash';

const GroupMember = ({ id, person, role, status }) => {
  const modalDispatch = useModalDispatch();
  const client = useApolloClient();
  const handlePressView = groupMemberId => {
    if (isEmpty(id)) return;

    modalDispatch(
      showModal('GroupMemberDetails', {
        id: groupMemberId,
        onSave: ({ status, inactiveStatusReason }) => {
          client.cache.modify({
            id: cache.identify({ id }),
            fields(fieldValue, details) {
              return details.INVALIDATE;
            },
          });
        },
      })
    );
  };
  const profileImageUrl = person?.photo?.uri;
  const fullName = [person?.firstName, person?.lastName]
    .filter(name => !isEmpty(name))
    .join(' ');

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      flex={1}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box position="relative">
          <SquareAvatar
            src={profileImageUrl}
            height="65px"
            width="56px"
            name={fullName || 'Group Member'}
          />
          {role?.toUpperCase() === 'LEADER' && (
            <Box
              position="absolute"
              bottom="0"
              width="100%"
              fontSize="0.6rem"
              backgroundColor="tertiary"
              opacity={0.9}
              color="white"
              fontWeight="bold"
              textAlign="center"
              borderBottomLeftRadius="base"
              borderBottomRightRadius="base"
            >
              LEADER
            </Box>
          )}
        </Box>

        <Box
          mx="s"
          opacity={status?.label?.toUpperCase() === 'INACTIVE' ? 0.4 : 1.0}
        >
          <GroupMemberStatusBadge status={status?.label} />
          <Box as="h4" mb="0">
            {fullName}
          </Box>
        </Box>
      </Box>

      <Button
        size="s"
        rounded
        variant="secondary"
        fontSize="0.65rem"
        py="3px"
        px="6px"
        disabled={isEmpty(id)}
        onClick={() => handlePressView(id)}
      >
        VIEW
      </Button>
    </Box>
  );
};

GroupMember.propTypes = {
  id: PropTypes.string.isRequired,
  note: PropTypes.string,
  status: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
  role: PropTypes.string,
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.shape({
      uri: PropTypes.string,
    }),
  }),
};
GroupMember.defaultProps = {};

export default GroupMember;
