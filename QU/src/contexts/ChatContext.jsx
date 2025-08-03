import React, { createContext, useState, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const { data: messages, saveData: saveMessages } = useLocalStorage('messages', []);
  const [loading, setLoading] = useState(false);

  const addMessage = useCallback(async (message) => {
    setLoading(true);
    try {
      const newMessage = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        sender: 'user',
        ...message
      };
      const updatedMessages = [...messages, newMessage];
      await saveMessages(updatedMessages);
      
      // Simulate AI response
      setTimeout(async () => {
        const aiResponse = {
          id: Date.now() + 1,
          timestamp: new Date().toISOString(),
          sender: 'ai',
          text: `AI response to: ${message.text}`
        };
        await saveMessages([...updatedMessages, aiResponse]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error adding message:', error);
      setLoading(false);
    }
  }, [messages, saveMessages]);

  const value = React.useMemo(() => ({
    messages,
    loading,
    addMessage
  }), [messages, loading, addMessage]);

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};