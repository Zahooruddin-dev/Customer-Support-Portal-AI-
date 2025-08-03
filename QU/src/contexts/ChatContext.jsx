import React, { createContext, useState, useContext } from 'react';
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

  const addMessage = async (message) => {
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
      const aiResponse = {
        id: Date.now() + 1,
        timestamp: new Date().toISOString(),
        sender: 'ai',
        text: `AI response to: ${message.text}`
      };
      await saveMessages([...updatedMessages, aiResponse]);
    } catch (error) {
      console.error('Error adding message:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    messages,
    loading,
    addMessage
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};