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
import { useRouter } from 'next/router';

import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { useGroupMember, useGroupMemberStatuses } from 'hooks';
import { GroupMemberDetails } from 'components';
import { Box, Modal, Loader } from 'ui-kit';

const GroupMemberDetailsModal = ({ id }) => {
  const router = useRouter();
  const modalDispatch = useModalDispatch();
  const { groupMemberStatuses, inactiveStatusReasons } =
    useGroupMemberStatuses();
  const [{ groupMember, loading }, [updateStatus], [updateNote]] =
    useGroupMember({ variables: { id } });
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

    if (window?.location?.pathname) {
      router.reload(window?.location?.pathname);
    }
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  console.log(groupMember);

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
};
GroupMemberDetailsModal.defaultProps = {};

export default GroupMemberDetailsModal;
