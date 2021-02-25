import React from 'react';
import PropTypes from 'prop-types';

import { CardGrid, GroupCard, utils } from 'ui-kit';

import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

function GroupsResultsList(props = {}) {
  const modalDispatch = useModalDispatch();
  const [{ authenticated }, authDispatch] = useAuth();

  const handleConnectClick = group => {
    const showConnectModal = () => {
      modalDispatch(
        showModal('ConnectModal', {
          leaderName: group?.node?.leaders?.edges[0]?.node?.nickName,
          leaderAvatar: group?.node?.leaders?.edges[0]?.node?.photo.uri,
          groupId: group?.node?.id,
          width: utils.rem('450px'),
        })
      );
    };

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
        const callToAction = {
          call: 'Contact',
          action: () => handleConnectClick(group),
        };
        return (
          <GroupCard
            key={group.node?.id}
            callToAction={callToAction}
            campus={group.node?.campus?.name}
            coverImage={group.coverImage?.sources[0]?.uri}
            dateTime={group.node?.dateTime?.start}
            groupType={group.type}
            heroAvatars={group.node?.leaders?.edges}
            preferences={group.node?.preference}
            subPreference={group.node?.subPreference}
            summary={group.summary}
            title={group.title}
            totalAvatars={group.node?.members?.totalCount}
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
