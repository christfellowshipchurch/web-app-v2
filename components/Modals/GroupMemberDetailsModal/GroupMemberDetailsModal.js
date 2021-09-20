/**
 * GroupMemberDetailsModal.js
 *
 * Author: Caleb Panza
 * Created: Sep 08, 2021
 *
 * description
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/client';

import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import {
  useEditGroupMember,
  useGroupMember,
  useGroupMemberStatuses,
} from 'hooks';
import { GroupMemberDetails } from 'components';
import { Box, Modal, Loader } from 'ui-kit';

const GroupMemberDetailsModal = ({ id, onSave: callback }) => {
  const client = useApolloClient();
  const modalDispatch = useModalDispatch();
  const { groupMemberStatuses, inactiveStatusReasons } =
    useGroupMemberStatuses();
  const [[updateStatus], [updateNote]] = useEditGroupMember();
  const { groupMember, loading } = useGroupMember({ variables: { id } });
  const [isLoading, setIsLoading] = useState(loading);

  const { cache } = client;

  const onCancel = () => {
    modalDispatch(hideModal());
  };

  const onSave = async ({
    groupMemberId,
    note,
    status,
    inactiveStatusReason,
  }) => {
    setIsLoading(true);

    await Promise.all([
      updateStatus({
        variables: {
          groupMemberId,
          groupMemberStatusId: status,
          inactiveStatusReasonId: inactiveStatusReason,
        },
      }),
      updateNote({
        variables: {
          groupMemberId,
          note,
        },
      }),
    ]);

    cache.modify({
      id: cache.identify({ __typename: 'GroupMemberSearchResult', id }),
      fields: {
        status() {
          const newStatus = groupMemberStatuses.find(({ id }) => id === status);
          return newStatus.label;
        },
      },
    });

    onCancel();
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <Modal>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Loader />
        </Box>
      ) : (
        <GroupMemberDetails
          {...groupMember}
          groupMemberStatuses={groupMemberStatuses}
          inactiveStatusReasons={inactiveStatusReasons}
          onCancel={onCancel}
          onSave={args => onSave(args)}
        />
      )}
    </Modal>
  );
};

GroupMemberDetailsModal.propTypes = {
  id: PropTypes.string.isRequired,
  onSave: PropTypes.func,
};
GroupMemberDetailsModal.defaultProps = {
  onSave: () => null,
};

export default GroupMemberDetailsModal;
