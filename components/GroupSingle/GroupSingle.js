import React from 'react';
import PropTypes from 'prop-types';

import { Chat, ContentLayout } from 'components';
import { ChatConnectionProvider } from 'providers';
import { Box, Button } from 'ui-kit';

import Styled from './GroupSingle.styles';

function GroupSingle(props = {}) {
  console.log('props:', props);

  return (
    <ChatConnectionProvider>
      <ContentLayout
        title={props.data.title}
        summary={props.data.schedule?.friendlyScheduleText}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
        renderC={() => <Button>Join Meeting</Button>}
        contentTitleD="Group Chat"
        renderContentD={() => (
          <Styled.ChatContainer>
            <Chat
              streamChatChannel={props.data?.streamChatChannel}
              relatedNode={props.data}
            />
          </Styled.ChatContainer>
        )}
        contentTitleE="Schedule"
        renderContentE={() => (
          <Box as="p">The schedule will go here&hellip;</Box>
        )}
      />
    </ChatConnectionProvider>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
