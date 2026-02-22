// components/dashboard/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'bi bi-grid-3x3-gap-fill' },
    { name: 'My Courses', path: '/dashboard/courses', icon: 'bi bi-journals' },
    { name: 'Schedule', path: '/dashboard/schedule', icon: 'bi bi-calendar3' },
    { name: 'Settings', path: '/dashboard/settings', icon: 'bi bi-gear-wide-connected' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo-icon">P2P</span>
        <span className="logo-name">PeerLearn</span>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path} 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            <span className="material-symbols-outlined"><i className={item.icon}></i></span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <span className="material-symbols-outlined"><i className='bi bi-box-arrow-left'></i></span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;