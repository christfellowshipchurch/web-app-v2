import { useEffect, useRef } from 'react';
import { getStreamUser } from './utils';

import { useCurrentUser } from 'hooks';

export default function useCurrentChatUser() {
  const { currentUser } = useCurrentUser();

  // Using a `ref` allows proper shallow comparisons in consumers of this hook.
  // Without it, i.e. directly returning `getStreamUser(currentUser)`, would
  // cause hook consumers to treat every render as a new user.
  const chatUser = useRef(null);

  useEffect(() => {
    console.group('✨%c [useCurrentChatUser] useEffect', 'color: yellow');

    if (currentUser) {
      chatUser.current = getStreamUser(currentUser);
      console.log('✅ Updated chatUser.current:', chatUser.current);
    } else {
      chatUser.current = null;
      console.log('🗑️ Cleared chatUser.current:', chatUser.current);
    }

    console.groupEnd();
  }, [currentUser]);

  return {
    chatUser: chatUser.current,
    chatToken: currentUser?.streamChatToken || null,
  };
}
