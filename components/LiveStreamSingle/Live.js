import React from 'react';
import PropTypes from 'prop-types';

import { ChatProvider } from 'providers';
import { Chat, Video } from 'components';
import { Box } from 'ui-kit';

import Styled from './Live.styles';

function Live(props = {}) {
  return (
    <ChatProvider>
      <Styled.Container>
        <Styled.Video>
          <Video
            src={props.data?.media?.sources[0].uri}
            poster={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
            autoPlay={false}
            playsInline={true}
          />
        </Styled.Video>
        <Styled.MastHead>
          <Styled.LiveIndicatorContainer>
            <Styled.LiveIndicator>Live</Styled.LiveIndicator>
          </Styled.LiveIndicatorContainer>
          <Box>
            <Styled.Title>{props.data.relatedNode?.title}</Styled.Title>
          </Box>
        </Styled.MastHead>
        <Styled.Details>
          {props.data.relatedNode?.summary && (
            <Box as="p">{props.data.relatedNode?.summary}</Box>
          )}
        </Styled.Details>
        <Styled.Chat>
          <Chat
            streamChatChannel={props.data?.streamChatChannel}
            relatedNode={props.data?.relatedNode}
          />
        </Styled.Chat>
      </Styled.Container>
    </ChatProvider>
  );
}

Live.propTypes = {
  data: PropTypes.object,
  // @see `useLiveStream` hook
  metaData: PropTypes.shape({
    isLive: PropTypes.bool,
    isBefore: PropTypes.bool,
    isAfter: PropTypes.bool,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  }),
};

export default Live;
