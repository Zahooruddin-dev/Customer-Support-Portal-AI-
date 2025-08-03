// filepath: /customer-support-portal/customer-support-portal/src/components/layout/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/chat" className={styles.navLink}>Chat</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/tickets" className={styles.navLink}>My Tickets</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/profile" className={styles.navLink}>Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;