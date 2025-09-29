import React from 'react';
import './AppHeader.css';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <h1 className="logo-text">ToyStore</h1>
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/toys"
            className="nav-link"
          >
            Toys
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
