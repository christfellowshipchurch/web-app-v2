import React from 'react';
import {
  MessageLivestream as MessageLivestreamCore,
  MessageSimple as MessageSimpleCore,
  ReactionSelector,
  SimpleReactionsList,
} from 'stream-chat-react';

// @see https://getstream.github.io/stream-chat-react/#message-1
// @see https://getstream.github.io/stream-chat-react/#reactionselector
// @see https://github.com/GetStream/stream-chat-react/blob/b42d62aff36df9feeecd604523b6cc03e510c9ed/src/components/Channel/emojiData.ts

// Some common properties needed on each reaction option
const sharedConfig = {
  emoticons: [],
  short_names: [],
  custom: true,
  spriteUrl: '/chat-reactions.png',
  size: 20,
  sheetColumns: 2,
  sheetRows: 3,
  sheetSize: 64,
};

const reactionOptions = [
  // {
  //   id: 'clap',
  //   name: 'clap',
  //   colons: ':clap:',
  //   sheet_x: 0,
  //   sheet_y: 0,
  //   ...sharedConfig,
  // },
  {
    id: 'haha',
    name: 'haha',
    colons: ':joy:',
    sheet_x: 1,
    sheet_y: 0,
    ...sharedConfig,
  },
  {
    id: 'pray',
    name: 'pray',
    colons: ':pray:',
    sheet_x: 0,
    sheet_y: 1,
    ...sharedConfig,
  },
  {
    id: 'fire',
    name: 'fire',
    colons: ':fire:',
    sheet_x: 1,
    sheet_y: 1,
    ...sharedConfig,
  },
  {
    id: 'wow',
    name: 'wow',
    colons: ':astonished:',
    sheet_x: 0,
    sheet_y: 2,
    ...sharedConfig,
  },
  {
    id: 'love',
    name: 'love',
    colons: ':heart:',
    sheet_x: 1,
    sheet_y: 2,
    ...sharedConfig,
  },
];

const CustomReactionSelector = React.forwardRef((props, ref) => (
  <ReactionSelector ref={ref} reactionOptions={reactionOptions} {...props} />
));

const CustomReactionsList = props => (
  <SimpleReactionsList reactionOptions={reactionOptions} {...props} />
);

function withCustomReactions(MessageComponent) {
  return props => (
    <MessageComponent
      ReactionSelector={CustomReactionSelector}
      ReactionsList={CustomReactionsList}
      {...props}
    />
  );
}

export const MessageSimple = withCustomReactions(MessageSimpleCore);
export const MessageLivestream = withCustomReactions(MessageLivestreamCore);
