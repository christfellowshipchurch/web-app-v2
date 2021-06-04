import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { showStep, hideModal, useModalDispatch } from 'providers/ModalProvider';

import { useContactGroupLeader, useGroupMemberStatus } from 'hooks';

import { Avatar, Box, Button, Loader } from 'ui-kit';

function ConnectForm(props = {}) {
  const { data, loading } = useGroupMemberStatus({
    skip: isEmpty(props?.groupId),
    variables: {
      groupId: props?.groupId,
    },
  });
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

  const generateTitle = key => {
    switch (key) {
      case 'LOADING':
        return 'Loading';
      case 'FULL':
        return 'Sorry, this group is now full.';
      case 'PENDING':
        return `${props.leaderName} will be in contact soon!`;
      case 'MEMBER':
        return `You're already a member of this group.`;
      case 'OPEN':
      default:
        return `Connect with ${props.leaderName}`;
    }
  };

  const generateSummary = key => {
    switch (key) {
      case 'OPEN':
        return `Contact the leader to let them know you’re interested.`;
      case 'PENDING':
        return `Your status in this group is "pending".`;
      case 'MEMBER':
        return `Contact ${props.leaderName} if you have any questions.`;
      case 'LOADING':
      case 'FULL':
      default:
        return ``;
    }
  };

  const generateButtonTitle = key => {
    switch (key) {
      case 'OPEN':
        return `Send`;
      case 'LOADING':
      case 'PENDING':
      case 'MEMBER':
      case 'FULL':
      default:
        return `Find Another Group`;
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
        <Avatar
          src={props.leaderAvatar}
          name={props.leaderName}
          height="100px"
          width="100px"
        />
      </Box>

      <Box textAlign="center" as="h2">
        {status === 'LOADING' ? (
          <Loader justifyContent="center" />
        ) : (
          generateTitle(status)
        )}
      </Box>
      <Box textAlign="center" as="p" mb="l" px="m">
        {generateSummary(status)}
      </Box>

      {status !== 'MEMBER' && status !== 'PENDING' && status !== 'LOADING' && (
        <Button
          onClick={handleOnClick}
          mb="base"
          status={status === 'LOADING' ? 'LOADING' : 'IDLE'}
        >
          {generateButtonTitle(status)}
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
