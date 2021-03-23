import { useEffect, useState } from 'react';
import { getStreamUser } from './utils';

import { useCurrentUser } from 'hooks';

export default function useCurrentChatUser() {
  const { currentUser } = useCurrentUser();
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    console.group('✨%c [useCurrentChatUser] useEffect', 'color: yellow');

    if (currentUser && chatUser === null) {
      setChatUser(getStreamUser(currentUser));
      console.log('✅ Updated chatUser');
    } else if (!currentUser && chatUser !== null) {
      setChatUser(null);
      console.log('🗑️ Cleared chatUser');
    }

    console.groupEnd();
  }, [currentUser, chatUser]);

  return {
    chatUser,
    chatToken: currentUser?.streamChatToken || null,
  };
}
