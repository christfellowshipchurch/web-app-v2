import React, { createContext, useContext, useState, useEffect } from 'react';

import { useAuth } from 'providers/AuthProvider';
import { useCurrentUser } from 'hooks';

import StreamChatClient from './StreamChatClient';
import useCurrentChatUser from './useCurrentChatUser';

// :: Constants
const ConnectionStatus = Object.freeze({
  CONNECTED: 'CONNECTED',
  CONNECTING: 'CONNECTING',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
});

// :: Contexts
const ChatStateContext = createContext(null);

// :: Providers
const ChatProvider = ({ children }) => {
  const [{ authenticated }] = useAuth();
  const { chatUser, chatToken } = useCurrentChatUser();
  const isClient = typeof window !== 'undefined';

  const [connectionStatus, setConnectionStatus] = useState(
    ConnectionStatus.DISCONNECTED
  );

  console.group('📡%c [ChatProvider]', 'color: orange');
  console.log('connectionStatus:', connectionStatus);
  console.log('authenticated:', authenticated);
  console.log('chatUser:', chatUser);
  console.log('chatToken:', chatToken);
  console.groupEnd();

  // Initialize user with Stream Chat client, and respond to changes in authentication state
  useEffect(() => {
    if (!isClient) {
      return;
    }

    async function connectUser() {
      setConnectionStatus(ConnectionStatus.CONNECTING);
      await StreamChatClient.connectUser(chatUser, chatToken);
      setConnectionStatus(ConnectionStatus.CONNECTED);
    }

    async function connectAnonymously() {
      setConnectionStatus(ConnectionStatus.CONNECTING);
      await StreamChatClient.connectAnonymousUser();
      setConnectionStatus(ConnectionStatus.CONNECTED);
    }

    async function connect() {
      try {
        // Connect as authenticated user if we're ready to do so
        if (authenticated && chatUser && chatToken) {
          await connectUser();
        }

        // Connect as anonymous user if unauthenticated
        if (!authenticated) {
          await connectAnonymously();
        }
      } catch (error) {
        console.error('ChatProvider error: ', error);
        setConnectionStatus(ConnectionStatus.ERROR);
      }
    }

    // If we're disconnected, try to connect
    if (connectionStatus === ConnectionStatus.DISCONNECTED) {
      connect();
    }

    // Cleanup / Disconnect
    return async () => {
      if (connectionStatus === ConnectionStatus.CONNECTED) {
        setConnectionStatus(ConnectionStatus.DISCONNECTED);
        await StreamChatClient.disconnectUser();
      }
    };
  }, [authenticated, chatUser, chatToken, connectionStatus]);

  return (
    <ChatStateContext.Provider value={connectionStatus}>
      {children}
    </ChatStateContext.Provider>
  );
};

// :: Hook
function useChat() {
  const context = useContext(ChatStateContext);

  if (context === undefined) {
    throw new Error(`useChat must be used within a ChatProvider`);
  }

  return [StreamChatClient, context];
}

export { ChatProvider as default, useChat, ConnectionStatus };
