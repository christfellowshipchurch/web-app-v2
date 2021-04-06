import React from 'react';
import PropTypes from 'prop-types';

import { Chat, ContentLayout } from 'components';
import { ChatConnectionProvider } from 'providers';
import { Button } from 'ui-kit';

import GroupDateTime from './GroupDateTime';

import Styled from './GroupSingle.styles';

function GroupSingle(props = {}) {
  return (
    <ChatConnectionProvider>
      <ContentLayout
        title={props.data?.title}
        summary={props.data.schedule?.friendlyScheduleText}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
        renderC={() => <Button>Join Meeting</Button>}
        renderContentD={() => (
          <Styled.ChatContainer>
            <Chat
              streamChatChannel={props.data?.streamChatChannel}
              relatedNode={props.data}
            />
          </Styled.ChatContainer>
        )}
        renderContentE={() => (
          <GroupDateTime
            title={props.data?.title}
            summary={props.data?.summary}
            address={document.URL}
            dateTime={props.data?.dateTime}
            parentVideoCall={props.data?.parentVideoCall}
            videoCall={props.data?.videoCall}
          />
        )}
      />
    </ChatConnectionProvider>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
