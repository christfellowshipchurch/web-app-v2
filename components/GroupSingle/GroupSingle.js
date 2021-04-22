import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { useCurrentBreakpoint, useCurrentUser } from 'hooks';
import { ChatConnectionProvider } from 'providers';
import { Box, Card } from 'ui-kit';

import GroupChat from './GroupChat';
import GroupDateTime from './GroupDateTime';
import GroupMembers from './GroupMembers';
import GroupResources from './GroupResources';
import GroupActions from './GroupActions';

function GroupSingle(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();
  const { currentUser } = useCurrentUser();

  const totalMembers =
    (props.data?.leaders.totalCount || 0) +
    (props.data?.members.totalCount || 0);

  const handleOnClickVideoCall = action => {
    // amplitude.trackEvent({
    //   category: 'Groups',
    //   action: action ? `${action} Video Call` : 'Video Call',
    //   label: props.data?.title,
    // });
  };

  return (
    <ChatConnectionProvider>
      <ContentLayout
        title={props.data?.title}
        summary={props.data.schedule?.friendlyScheduleText}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
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
              />
            </Box>
          </Box>
        )}
        renderD={() => (
          <Box>
            <Card>
              <GroupChat
                streamChatChannel={props.data?.streamChatChannel}
                relatedNode={props.data}
                pt="s"
              />
            </Card>
          </Box>
        )}
        renderE={() => (
          <Card p="base">
            <Box as="h2" fontSize="h3">
              About
            </Box>
            <Box as="p">{props.data?.summary}</Box>

            <Box as="h2" fontSize="h3" mt="l" mb="base">
              Resources
            </Box>
            <GroupResources resources={props.data?.resources} />
          </Card>
        )}
      />
    </ChatConnectionProvider>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
