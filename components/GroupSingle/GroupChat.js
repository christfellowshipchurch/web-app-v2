import PropTypes from 'prop-types';

import { Chat } from 'components';
import { useCurrentBreakpoint } from 'hooks';

import GroupChatMobile from './GroupChatMobile';

import Styled from './GroupSingle.styles';

export default function GroupChat(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();

  if (!props.streamChatChannel) {
    return null;
  }

  if (currentBreakpoint.isSmall) {
    return <GroupChatMobile />;
  }

  return (
    <Styled.ChatContainer pt="0">
      <Chat
        streamChatChannel={props.streamChatChannel}
        relatedNode={props.relatedNode}
      />
    </Styled.ChatContainer>
  );
}

GroupChat.propTypes = {
  streamChatChannel: PropTypes.shape({
    id: PropTypes.string,
    channelId: PropTypes.string,
    channelType: PropTypes.string,
  }),
  relatedNode: PropTypes.object,
};
