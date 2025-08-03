// filepath: /customer-support-portal/customer-support-portal/src/components/chat/ChatInterface.jsx
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import styles from './ChatInterface.module.css';

const ChatInterface = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageList}>
        <MessageList />
      </div>
      <div className={styles.inputContainer}>
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatInterface;