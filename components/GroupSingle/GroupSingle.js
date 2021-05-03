import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { useCurrentBreakpoint, useCurrentUser, useCheckIn } from 'hooks';

import { ChatConnectionProvider } from 'providers';
import { currentUserIsLeader } from 'utils';
import { Box, Card, Icon } from 'ui-kit';
import { CustomLink } from 'components';

import GroupChat from './GroupChat';
import GroupDateTime from './GroupDateTime';
import GroupMembers from './GroupMembers';
import GroupResources from './GroupResources';
import GroupActions from './GroupActions';

function GroupSingle(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();
  const { currentUser } = useCurrentUser();
  const isLeader = currentUserIsLeader(currentUser, props.data?.leaders?.edges);

  const { checkInCompleted, options, checkInCurrentUser } = useCheckIn({
    nodeId: props.data.id,
  });

  const enableChat = Boolean(props.data?.streamChatChannel);
  const totalMembers =
    (props.data?.leaders?.totalCount || 0) +
    (props.data?.members?.totalCount || 0);

  const handleOnClickVideoCall = action => {
    // amplitude.trackEvent({
    //   category: 'Groups',
    //   action: action ? `${action} Video Call` : 'Video Call',
    //   label: props.data?.title,
    // });
    if (options.length > 0) {
      checkInCurrentUser({ optionIds: options.map(({ id }) => id) });
    }
  };

  function renderChat() {
    return (
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
  }

  function renderAboutAndResources() {
    return (
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
  }

  return (
    <ChatConnectionProvider>
      <ContentLayout
        mode={props.data.mode}
        title={props.data?.title}
        summary={props.data.schedule?.friendlyScheduleText}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
        titleIconLink={() =>
          isLeader ? (
            // NOTE: The `router.pathname` from `useRouter()` didn't work for some reason.
            <CustomLink href={`${window.location.pathname}/manage`}>
              <Icon name="gear" ml="xs" mt="xxs" />
            </CustomLink>
          ) : null
        }
        renderContentB={() => (
          <Box display="flex" flexDirection="column" mt="l" pb="base">
            <Box as="h2" fontSize="h3" mb="base">
              {totalMembers} Members
            </Box>
            <GroupMembers
              showCount={currentBreakpoint.isSmall ? 5 : 7}
              leaders={props.data?.leaders}
              members={props.data?.members}
            />
          </Box>
        )}
        renderC={() => (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pb="l"
            mt={{ _: 'l', md: '0' }}
          >
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
                  currentUser?.profile?.nickName ||
                  currentUser?.profile?.firstName
                }
                parentVideoCall={props.data?.parentVideoCall}
                videoCall={props.data?.videoCall}
                onClickVideoCall={handleOnClickVideoCall}
                onClickParentVideoCall={handleOnClickVideoCall}
                checkInCompleted={checkInCompleted}
              />
            </Box>
          </Box>
        )}
        renderD={enableChat ? renderChat : renderAboutAndResources}
        renderE={enableChat ? renderAboutAndResources : null}
      />
    </ChatConnectionProvider>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
