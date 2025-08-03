import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const toggleTheme = () => {
    // Logic to toggle between dark and light mode
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/login" className={styles.navLink}>Login</Link>
          </li>
          <li>
            <Link to="/register" className={styles.navLink}>Register</Link>
          </li>
          <li>
            <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
          </li>
          <li>
            <button onClick={toggleTheme} className={styles.themeButton}>
              Toggle Theme
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;