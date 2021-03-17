import { useRef } from 'react';
import { StreamChat } from 'stream-chat';

const API_KEY = 'rrv4dug6jgu6';
const USER_TOKEN = 'XXXXXXX TEMPORARILY HIDDEN FROM COMMIT HISTORY XXXXXXX';

export default function useChat() {
  const chatClientRef = useRef(StreamChat.getInstance(API_KEY));
  chatClientRef.current.connectUser(
    {
      id: '3a4a20f0828c592f7f366dfce8d1f9ab',
      name: 'Ryan Davidson',
    },
    USER_TOKEN
  );

  return chatClientRef.current;
}
