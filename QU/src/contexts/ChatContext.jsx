import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/localStorage';
import { useAuth } from '../hooks/useAuth';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const savedMessages = storageService.getItem(`chat_messages_${currentUser.id}`) || [];
      setMessages(savedMessages);
    }
  }, [currentUser]);

  const addMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      userId: currentUser.id,
      ...message
    };

    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages, newMessage];
      storageService.setItem(`chat_messages_${currentUser.id}`, updatedMessages);
      return updatedMessages;
    });
  };

  const clearMessages = () => {
    setMessages([]);
    storageService.removeItem(`chat_messages_${currentUser.id}`);
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      loading, 
      addMessage, 
      clearMessages, 
      setLoading 
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};