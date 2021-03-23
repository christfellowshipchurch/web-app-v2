import { useEffect, useState } from 'react';
import { getStreamUser } from './utils';

import { useCurrentUser } from 'hooks';

export default function useCurrentChatUser() {
  const { currentUser } = useCurrentUser();
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    if (currentUser && chatUser === null) {
      setChatUser(getStreamUser(currentUser));
    } else if (!currentUser && chatUser !== null) {
      setChatUser(null);
    }
  }, [currentUser, chatUser]);

  return {
    chatUser,
    chatToken: currentUser?.streamChatToken || null,
  };
}
