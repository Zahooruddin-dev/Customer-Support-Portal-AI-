// filepath: /customer-support-portal/customer-support-portal/src/components/chat/MessageInput.jsx
import React, { useState, useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="input-field"
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default MessageInput;