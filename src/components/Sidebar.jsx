// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/" className="sidebar-link" activeClassName="active-link">
            Enfermedades
          </Link>
        </li>
        <li>
          <Link to="/reports" className="sidebar-link" activeClassName="active-link">
            Cifras
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link" activeClassName="active-link">
            Departamentos
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;






