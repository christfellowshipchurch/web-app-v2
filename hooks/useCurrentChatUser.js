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
    // Only update the `chatUser` value if a change occurred and
    // the value is out-of-sync with current user auth state.
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
