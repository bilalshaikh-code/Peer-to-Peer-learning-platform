// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of the section must be visible
    );

    // Watch these sections
    const sections = ['home', 'courses', 'features', 'how-it-works'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-text">PeerLearn</span>
      </Link>

      <ul className="nav-links">
        {/* Use Link for pages, href for section scrolling */}
        <li><HashLink to="/#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</HashLink></li>
        <li><HashLink to="/#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}>Features</HashLink></li>
        <li><HashLink to="/#courses" className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}>All Courses</HashLink></li>
        <li><HashLink to="/#how-it-works" className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}>How it works</HashLink></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/auth" state={{ mode: 'signin' }} className="signin">Sign In</Link>
        <Link to="/auth" state={{ mode: 'signup' }} className="card-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;