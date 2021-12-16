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

const GroupMemberDetailsModal = ({ id, onSave: callback, groupId, onEmail }) => {
  const modalDispatch = useModalDispatch();
  const { groupMemberStatuses, inactiveStatusReasons } =
    useGroupMemberStatuses();
  const [[updateStatus], [updateNote]] = useEditGroupMember({
    update: (cache, { data }) => {
      if (data?.updateGroupMemberStatus) {
        const { updateGroupMemberStatus } = data;
        const { id, status: newStatus } = updateGroupMemberStatus;

        cache.modify({
          id: cache.identify({ __typename: 'GroupMember', id }),
          fields: {
            status() {
              return newStatus;
            },
          },
        });

        cache.modify({
          id: cache.identify({ __typename: 'GroupMemberSearchResult', id }),
          fields: {
            status() {
              return newStatus.label;
            },
          },
        });
      }
    },
  });
  const { groupMember, loading } = useGroupMember({ variables: { id } });
  const [isLoading, setIsLoading] = useState(loading);

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
    // note : only run the mutation if the value has actually changed
    const statusPromise = () => {
      if (status !== groupMember.status.id) {
        return updateStatus({
          variables: {
            groupMemberId,
            groupMemberStatusId: status,
            inactiveStatusReasonId: inactiveStatusReason,
          },
        });
      }

      return Promise.resolve();
    };
    const notePromise = () => {
      if (note !== groupMember.note) {
        return updateNote({
          variables: {
            groupMemberId,
            note,
          },
        });
      }

      return Promise.resolve();
    };

    await Promise.all([statusPromise(), notePromise()]);

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
          onEmail={onEmail}
          groupId={groupId}
        />
      )}
    </Modal>
  );
};

GroupMemberDetailsModal.propTypes = {
  id: PropTypes.string.isRequired,
  groupId: PropTypes.string.isRequired,
  onSave: PropTypes.func,
};
GroupMemberDetailsModal.defaultProps = {
  onSave: () => null,
  onEmail: () => null
};

export default GroupMemberDetailsModal;
