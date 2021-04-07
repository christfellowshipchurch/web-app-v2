import React from 'react';
import PropTypes from 'prop-types';

import { ContentLayout } from 'components';
import { ChatConnectionProvider } from 'providers';
import { Box, Button, Card } from 'ui-kit';

import GroupChat from './GroupChat';
import GroupDateTime from './GroupDateTime';
import GroupResources from './GroupResources';

function GroupSingle(props = {}) {
  return (
    <ChatConnectionProvider>
      <ContentLayout
        title={props.data?.title}
        summary={props.data.schedule?.friendlyScheduleText}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
        renderC={() => <Button>Join Meeting</Button>}
        renderContentD={() => (
          <Box pb="base">
            {/* <Divider mx="xl" mb="xl" /> */}

            <Box as="h3">About</Box>
            <Box as="p">{props.data?.summary}</Box>

            <Box as="h3" mt="l" mb="base">
              Resources
            </Box>
            <GroupResources resources={props.data?.resources} />
          </Box>
        )}
        renderContentE={() => (
          <Card>
            <GroupDateTime
              title={props.data?.title}
              summary={props.data?.summary}
              address={document.URL}
              dateTime={props.data?.dateTime}
              parentVideoCall={props.data?.parentVideoCall}
              videoCall={props.data?.videoCall}
            />

            <GroupChat
              streamChatChannel={props.data?.streamChatChannel}
              relatedNode={props.data}
            />
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
