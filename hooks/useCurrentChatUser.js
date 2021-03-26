import { useEffect, useState } from 'react';
import { getStreamUser } from 'utils/chat';

import { useCurrentUser } from 'hooks';

/**
 * Maintains user and token data needed to initialize chat.
 * Automatically stays in sync with authentication state, and uses local
 * state for the `chatUser` value so hook consumers can properly react
 * to changes via `useEffect`, etc.
 * @returns {Object}
 */
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
