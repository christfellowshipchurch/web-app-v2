import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { showStep, hideModal, useModalDispatch } from 'providers/ModalProvider';

import { useContactGroupLeader, useGroupMemberStatus } from 'hooks';

import { Avatar, Box, Button, Icon, Loader } from 'ui-kit';
import {
  generateTitle,
  generateSummary,
  generateButtonTitle,
} from './ConnectModal.utils';

function ConnectForm(props = {}) {
  const { data, loading } = useGroupMemberStatus({
    skip: isEmpty(props?.groupId),
    variables: {
      groupId: props?.groupId,
    },
  });
  const hasLeader = !isEmpty(props.leaderName);
  const [status, setStatus] = useState('LOADING');
  const modalDispatch = useModalDispatch();
  const [contactGroupLeader] = useContactGroupLeader();

  const handleOnClick = async () => {
    if (status === 'OPEN') {
      try {
        const { data } = await contactGroupLeader({
          variables: {
            groupId: props.groupId,
          },
        });
        const contactStatus = data.contactGroupLeader;
        if (contactStatus !== 'Failed') {
          modalDispatch(showStep(1));
        }
      } catch (error) {
        const addMemberError = error?.graphQLErrors?.find(
          e => e?.extensions?.code === 'ADD_GROUP_MEMBER'
        );

        if (addMemberError?.extensions?.groupMemberStatus) {
          setStatus(addMemberError?.extensions?.groupMemberStatus);
        }
      }
    } else if (status !== 'LOADING') {
      modalDispatch(hideModal());
    }
  };

  useEffect(() => {
    if (!loading && data?.groupMemberStatus) {
      const { groupMemberStatus } = data;

      setStatus(groupMemberStatus);
    }
  }, [data, loading]);

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" flexDirection="column" mb="base">
        {hasLeader ? (
          <Avatar
            src={props.leaderAvatar}
            name={props.leaderName}
            height="100px"
            width="100px"
          />
        ) : (
          <Icon name="users" size={100} color="tertiary" />
        )}
      </Box>

      <Box textAlign="center" as="h2">
        {status === 'LOADING' ? (
          <Loader justifyContent="center" />
        ) : (
          generateTitle(status, { leaderName: props?.leaderName })
        )}
      </Box>
      <Box textAlign="center" as="p" mb="l" px="m">
        {generateSummary(status, { leaderName: props?.leaderName })}
      </Box>

      {status !== 'MEMBER' && status !== 'PENDING' && status !== 'LOADING' && (
        <Button
          onClick={handleOnClick}
          mb="base"
          status={status === 'LOADING' ? 'LOADING' : 'IDLE'}
        >
          {generateButtonTitle(status, { leaderName: props?.leaderName })}
        </Button>
      )}
    </Box>
  );
}

ConnectForm.propTypes = {
  initialValue: PropTypes.string,
  leaderName: PropTypes.string,
};

export default ConnectForm;
