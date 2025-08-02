// filepath: /customer-support-portal/customer-support-portal/src/components/chat/MessageList.jsx
import React, { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';

const MessageList = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;