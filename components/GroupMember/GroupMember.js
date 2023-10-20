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

import {
  useModalDispatch,
  showModal,
  hideModal,
} from 'providers/ModalProvider';
import { Box, Button, GroupMemberStatusBadge, SquareAvatar } from 'ui-kit';
import { isEmpty } from 'lodash';

const GroupMember = ({ id, person, role, status, groupId, groupRoleId }) => {
  const modalDispatch = useModalDispatch();
  const client = useApolloClient();
  const handlePressView = groupMemberId => {
    if (isEmpty(id)) return;

    modalDispatch(
      showModal('GroupMemberDetails', {
        id: groupMemberId,
        groupId,
        onEmail: () => {
          modalDispatch(hideModal());
        },
        onSave: ({ status, inactiveStatusReason }) => {
          client.cache.modify({
            id: client.cache.identify({ id }),
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

  let upperStatus = '';
  if (status.label !== undefined) {
    upperStatus = status?.label?.toUpperCase();
  }
  if (role !== undefined) {
    role = role.toUpperCase;
  }

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
          {role === 'LEADER' && (
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

        <Box mx="s" opacity={upperStatus === 'INACTIVE' ? 0.4 : 1.0}>
          <GroupMemberStatusBadge status={upperStatus} />
          <Box as="h4" mb="0">
            {fullName}
          </Box>
        </Box>
      </Box>
      {groupRoleId !== '48' && (
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
      )}
    </Box>
  );
};

GroupMember.propTypes = {
  /** The unique identifier for the group member, required. */
  id: PropTypes.string.isRequired,

  /** A note or additional information about the group member. */
  note: PropTypes.string,

  /** The status of the group member, containing an id and label. */
  status: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),

  /** The role or position of the group member. */
  role: PropTypes.string,

  /** The person object the this component accepts */
  person: PropTypes.shape({
    /** The first name of the group member. */
    firstName: PropTypes.string,

    /** The last name of the group member. */
    lastName: PropTypes.string,

    /** The photo of the group member, with a URI. */
    photo: PropTypes.shape({
      uri: PropTypes.string,
    }),
  }),
};

GroupMember.defaultProps = {};

export default GroupMember;
