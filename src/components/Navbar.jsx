// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-text">Peer-to-Peer</span>
      </Link>

      <ul className="nav-links">
        {/* Use Link for pages, href for section scrolling */}
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><a href="#courses" className="nav-link">Courses</a></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/auth" className="signin">Sign In</Link>
        <Link to="/auth" className="card-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;