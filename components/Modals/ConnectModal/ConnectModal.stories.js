import React from 'react';

import ConnectModal from './ConnectModal';

export default {
  title: 'components/ConnectModal',
  component: ConnectModal,
};

export const Default = () => {
  return (
    <ConnectModal
      leaderAvatar="https://source.unsplash.com/random/200x200"
      leaderName="Jordan"
    />
  );
};
