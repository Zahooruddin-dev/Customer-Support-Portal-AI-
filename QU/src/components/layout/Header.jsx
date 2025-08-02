import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const toggleTheme = () => {
    // Logic to toggle between dark and light mode
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;