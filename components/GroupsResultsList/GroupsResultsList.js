import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CardGrid, GroupCard, utils } from 'ui-kit';

import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import useGroupMemberStatus from 'hooks/useGroupMemberStatus';

// note : This breaks convention a little bit, but we need to create the CTA for the Group based on the status of the group for the current member.
function GroupCardWithMember(props) {
  const { data, loading } = useGroupMemberStatus({
    skip: isEmpty(props?.id),
    variables: {
      groupId: props?.id,
    },
  });
  const [callToAction, setCallToAction] = useState({
    call: 'Loading',
    action: null,
    buttonProps: {
      status: 'LOADING',
      disabled: true,
    },
  });

  useEffect(() => {
    if (!loading && data?.groupMemberStatus) {
      const { groupMemberStatus } = data;

      switch (groupMemberStatus) {
        case 'MEMBER':
          setCallToAction({
            call: 'You Are in This Group',
            action: null,
            buttonProps: {
              disabled: true,
            },
          });
          break;
        case 'PENDING':
          setCallToAction({
            call: 'Message Sent to Leader',
            action: null,
            buttonProps: {
              disabled: true,
            },
          });
          break;
        case 'FULL':
          setCallToAction({
            call: 'This Group is Full',
            action: null,
            buttonProps: {
              disabled: true,
            },
          });
          break;
        case 'OPEN':
        default:
          setCallToAction({
            call: props?.contactButtonText,
            action: () => props?.handleConnectClick(props),
          });
          break;
      }
    }
  }, [data, loading]);

  return <GroupCard {...props} callToAction={callToAction} />;
}

function GroupsResultsList(props = {}) {
  const modalDispatch = useModalDispatch();
  const [{ authenticated }, authDispatch] = useAuth();

  const handleConnectClick = group => {
    const showConnectModal = () => {
      modalDispatch(
        showModal('ConnectModal', {
          leaderName: group?.leaders[0].firstName,
          leaderAvatar: group?.leaders[0]?.photo?.uri,
          groupId: group?.node?.id,
          width: utils.rem('450px'),
        })
      );
    };

    if (group?.node?.__typename === 'Url') {
      const url = group?.node?.url;
      console.log(url);
      if (url) {
        window.open(url, '_blank').focus();
      }
      return;
    }

    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(
        updateAuth({
          onSuccess: showConnectModal,
        })
      );
    } else {
      showConnectModal();
    }
  };

  return (
    <CardGrid>
      {props.data.map(group => {
        console.log({ group });
        return (
          <GroupCardWithMember
            key={group.node?.id}
            id={group.node?.id}
            campus={group?.campusName}
            coverImage={group.coverImage?.sources[0]?.uri}
            meetingDay={group.meetingDay}
            heroAvatars={group?.leaders?.map(node => ({ node }))}
            preferences={group?.preferences}
            subPreference={group.subPreferences.join(', ')}
            meetingType={group?.meetingType}
            summary={group.summary}
            title={group.title}
            handleConnectClick={() => handleConnectClick(group)}
            contactButtonText={
              group?.node?.__typename === 'Url' ? 'Register' : 'Contact'
            }
          />
        );
      })}
    </CardGrid>
  );
}

GroupsResultsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GroupsResultsList;
