// filepath: /customer-support-portal/customer-support-portal/src/components/chat/MessageInput.jsx
import React, { useState } from 'react';
import { useChat } from '../../contexts/ChatContext';

const MessageInput = () => {
  const [text, setText] = useState('');
  const { addMessage, loading } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !loading) {
      addMessage({
        text: text.trim(),
        type: 'user'
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        disabled={loading}
      />
      <button type="submit" disabled={loading || !text.trim()}>
        Send
      </button>
    </form>
  );
};

export default MessageInput;