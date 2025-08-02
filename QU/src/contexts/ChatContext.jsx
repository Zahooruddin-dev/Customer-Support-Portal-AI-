import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, loading, addMessage, clearMessages, setLoading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};