// filepath: /customer-support-portal/customer-support-portal/src/components/chat/MessageList.jsx
import React from 'react';
import { useChat } from '../../contexts/ChatContext';
import styles from './MessageList.module.css';

const MessageList = () => {
  const { messages } = useChat();

  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <div key={message.id} className={`${styles.message} ${styles[message.sender]}`}>
          <p>{message.text}</p>
          <span className={styles.timestamp}>
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;