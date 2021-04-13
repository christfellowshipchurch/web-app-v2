import React, { createContext, useContext, useState, useEffect } from 'react';

import { useAuth } from 'providers/AuthProvider';
import { StreamChatClient } from 'lib/chat';
import { useCurrentChatUser } from 'hooks';

// :: Constants
const ConnectionStatus = Object.freeze({
  CONNECTED: 'CONNECTED',
  CONNECTING: 'CONNECTING',
  DISCONNECTED: 'DISCONNECTED',
  ERROR: 'ERROR',
});

// :: Contexts
const ChatConnectionStateContext = createContext(null);

// :: Providers
const ChatConnectionProvider = ({ children }) => {
  const [{ authenticated }] = useAuth();
  const { chatUser, chatToken } = useCurrentChatUser();
  const isClient = typeof window !== 'undefined';

  const [connectionStatus, setConnectionStatus] = useState(
    ConnectionStatus.DISCONNECTED
  );

  // Initialize user with Stream Chat client, and respond to changes in authentication state
  useEffect(() => {
    if (!isClient || connectionStatus === ConnectionStatus.CONNECTING) {
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

    // Attempt to initialize chat
    async function connect() {
      try {
        if (authenticated && chatUser && chatToken) {
          // Connect as authenticated user if we're ready to do so
          await connectUser();
        }

        if (!authenticated) {
          // Connect as anonymous user if unauthenticated
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
  }, [isClient, authenticated, chatUser, chatToken, connectionStatus]);

  return (
    <ChatConnectionStateContext.Provider value={connectionStatus}>
      {children}
    </ChatConnectionStateContext.Provider>
  );
};

// :: Hook
function useChatConnection() {
  const context = useContext(ChatConnectionStateContext);

  if (context === undefined) {
    throw new Error(
      `useChatConnection must be used within a ChatConnectionProvider`
    );
  }

  return context;
}

export {
  ChatConnectionProvider as default,
  useChatConnection,
  ConnectionStatus,
};
