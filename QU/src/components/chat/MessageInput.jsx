// filepath: /customer-support-portal/customer-support-portal/src/components/chat/MessageInput.jsx
import React, { useState } from 'react';
import { useChat } from '../../contexts/ChatContext';
import styles from './MessageInput.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        disabled={loading}
        className={styles.input}
      />
      <button 
        type="submit" 
        disabled={loading || !text.trim()} 
        className={styles.button}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;