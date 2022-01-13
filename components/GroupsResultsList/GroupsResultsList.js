import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { CardGrid, GroupCard, utils } from 'ui-kit';

import useFeatureAction from 'hooks/useFeatureAction';
import useGroupMemberStatus from 'hooks/useGroupMemberStatus';
import { getUrlFromRelatedNode } from 'utils';

// note : This breaks convention a little bit, but we need to create the CTA for the Group based on the status of the group for the current member.
function GroupCardWithMember({ relatedNode, ...props }) {
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
      href: '#',
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
              href: '#',
            },
          });
          break;
        case 'PENDING':
          setCallToAction({
            call: 'Message Sent to Leader',
            action: null,
            buttonProps: {
              disabled: true,
              href: '#',
            },
          });
          break;
        case 'FULL':
          setCallToAction({
            call: 'This Group is Full',
            action: null,
            buttonProps: {
              disabled: true,
              href: '#',
            },
          });
          break;
        case 'OPEN':
        default:
          setCallToAction({
            call: props?.contactButtonText,
            action: props?.handleConnectClick,
            buttonProps: {
              href: getUrlFromRelatedNode(relatedNode),
              target: '_blank',
            },
          });
          break;
      }
    }
  }, [data, loading]);

  return <GroupCard {...props} callToAction={callToAction} />;
}

function GroupsResultsList(props = {}) {
  const [onPressActionItem] = useFeatureAction();

  return (
    <CardGrid>
      {props.data.map(group => (
        <GroupCardWithMember
          key={group?.id}
          id={group?.id}
          campus={group?.campusName}
          coverImage={group.coverImage?.sources[0]?.uri}
          meetingDay={group.meetingDay}
          dateTime={group?.dateTime}
          heroAvatars={group?.leaders?.map(node => node)}
          preferences={group?.preferences}
          subPreference={group.subPreferences.join(', ')}
          meetingType={group?.meetingType}
          summary={group.summary}
          title={group.title}
          handleConnectClick={e =>
            onPressActionItem(e, {
              action: group?.action,
              relatedNode: group?.relatedNode,
              modalProps: {
                leaderName: group?.leaders[0]?.firstName,
                leaderAvatar: group?.leaders[0]?.photo?.uri,
                width: utils.rem('450px'),
              },
            })
          }
          contactButtonText={
            group?.relatedNode?.__typename === 'Url' ? 'Register' : 'Contact'
          }
          relatedNode={group.relatedNode || {}}
        />
      ))}
    </CardGrid>
  );
}

GroupsResultsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default GroupsResultsList;
