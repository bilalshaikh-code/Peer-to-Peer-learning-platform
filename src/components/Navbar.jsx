// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">EduFuture</span>
        {/* Alternative: use image logo */}
        {/* <img src="/logo.svg" alt="EduFuture Logo" className="logo-img" style={{ height: '38px' }} /> */}
      </div>

      {/* Hidden checkbox for CSS-only toggle */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle" hidden />

      {/* Hamburger icon - visible only on mobile */}
      <label htmlFor="nav-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className="nav-links">
        <li>
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li>
          <a href="#courses" className="nav-link">All Courses</a>
        </li>
        <li>
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>

      <div className="auth-buttons">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;