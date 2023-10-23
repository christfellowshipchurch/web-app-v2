import React from 'react';

import ConnectModal from './ConnectModal';

const exportedObject = {
  title: 'components/ConnectModal',
  component: ConnectModal,
};

export default exportedObject;

export const Default = () => {
  return (
    <ConnectModal
      leaderAvatar="https://source.unsplash.com/random/200x200"
      leaderName="Jordan"
    />
  );
};
