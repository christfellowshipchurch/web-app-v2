import {
  MessageLivestream as MessageLivestreamCore,
  MessageSimple as MessageSimpleCore,
} from 'stream-chat-react';

import withCustomReactions from './withCustomReactions';

export const MessageLivestream = withCustomReactions(MessageLivestreamCore);
export const MessageSimple = withCustomReactions(MessageSimpleCore);
