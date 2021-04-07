import PropTypes from 'prop-types';

import { Chat } from 'components';
import { useCurrentBreakpoint } from 'hooks';

import GroupChatMobile from './GroupChatMobile';

import Styled from './GroupSingle.styles';

export default function GroupChat(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();

  if (currentBreakpoint.isSmall || currentBreakpoint.isMedium) {
    return <GroupChatMobile />;
  }

  return (
    <Styled.ChatContainer>
      <Chat
        streamChatChannel={props.streamChatChannel}
        relatedNode={props.relatedNode}
        showHeader={true}
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
