// filepath: /customer-support-portal/customer-support-portal/src/components/chat/ChatInterface.jsx
import React, { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div className="chat-interface">
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
};

export default ChatInterface;