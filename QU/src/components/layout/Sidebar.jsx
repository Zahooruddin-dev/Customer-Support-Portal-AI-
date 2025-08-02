// filepath: /customer-support-portal/customer-support-portal/src/components/layout/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/tickets">My Tickets</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;