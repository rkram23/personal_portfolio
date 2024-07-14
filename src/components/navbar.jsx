import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/" className="nav-button">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-button">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-button">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
