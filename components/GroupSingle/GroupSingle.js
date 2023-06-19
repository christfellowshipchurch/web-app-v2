import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { ContentLayout } from 'components';
import { useCurrentBreakpoint, useCurrentUser, useCheckIn } from 'hooks';

import { ChatConnectionProvider } from 'providers';
import { currentUserIsLeader, transformISODates } from 'utils';
import { Box, Button, Card, Icon } from 'ui-kit';

import GroupChat from './GroupChat';
import GroupDateTime from './GroupDateTime';
import GroupMembers from './GroupMembers';
import GroupResources from './GroupResources';
import GroupActions from './GroupActions';

function GroupSingle(props = {}) {
  const router = useRouter();
  const currentBreakpoint = useCurrentBreakpoint();
  const { currentUser } = useCurrentUser();
  const isLeader = currentUserIsLeader(currentUser, props.data?.leaders?.edges);

  const { checkInCompleted, options, checkInCurrentUser } = useCheckIn({
    nodeId: props.data.id,
  });

  const totalMembers =
    (props.data?.leaders?.totalCount || 0) +
    (props.data?.members?.totalCount || 0);

  const handleOnClickVideoCall = action => {
    if (options.length > 0) {
      checkInCurrentUser({ optionIds: options.map(({ id }) => id) });
    }
  };

  // Sub-render functions for clarity
  // -----------------------------------
  const renderMembers = () => (
    <Box display="flex" flexDirection="column" mt="l" pb="base">
      <Box as="h2" fontSize="h3" mb="base">
        {totalMembers} Members
      </Box>
      <GroupMembers
        showCount={currentBreakpoint.isSmall ? 4 : 7}
        leaders={props.data?.leaders}
        members={props.data?.members}
      />
    </Box>
  );

  const renderMeetingDetails = () => (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pb="l"
      mt={{ _: 'l', md: '0' }}
    >
      {isLeader && (
        <Box my="base">
          <Button
            rounded
            variant="secondary"
            width={'100%'}
            onClick={() => {
              router.push(`${router.asPath}/edit`);
            }}
          >
            <Icon name="pen" mr="5px" mb="2px" size={20} /> Manage Group
          </Button>
        </Box>
      )}

      {/* If there's no start or end time that means the group has ended and we'll want to hide the following components */}
      {props?.data?.dateTime?.start && props?.data?.dateTime?.end && (
        <Box>
          <GroupDateTime
            title={props.data?.title}
            summary={props.data?.summary}
            address={document.URL}
            dateTime={props.data?.dateTime}
            parentVideoCall={props.data?.parentVideoCall}
            videoCall={props.data?.videoCall}
          />
          <GroupActions
            userName={
              currentUser?.profile?.nickName || currentUser?.profile?.firstName
            }
            parentVideoCall={props.data?.parentVideoCall}
            videoCall={props.data?.videoCall}
            onClickVideoCall={handleOnClickVideoCall}
            onClickParentVideoCall={handleOnClickVideoCall}
            checkInCompleted={checkInCompleted}
          />
        </Box>
      )}
    </Box>
  );

  const renderChat = () => (
    <Box mb="l">
      <Card>
        <GroupChat
          streamChatChannel={props.data?.streamChatChannel}
          relatedNode={props.data}
          pt="s"
        />
      </Card>
    </Box>
  );

  const renderAboutAndResources = () => (
    <Card p="base" mb="l">
      <Box as="h2" fontSize="h3">
        About
      </Box>
      <Box as="p">{props.data?.summary}</Box>

      <Box as="h2" fontSize="h3" mt="l" mb="base">
        Resources
      </Box>
      <GroupResources resources={props.data?.resources} />
    </Card>
  );
  // -----------------------------------

  return (
    <ChatConnectionProvider>
      <ContentLayout
        mode={props.data.mode}
        title={props.data?.title}
        summary={transformISODates(props.data?.dateTime?.start, {
          withTime: true,
        })}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
        renderContentB={renderMembers}
        renderC={renderMeetingDetails}
        renderD={renderChat}
        renderE={renderAboutAndResources}
      />
    </ChatConnectionProvider>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
