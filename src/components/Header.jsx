import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <div>
    
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Product E-Store
        </Link>
        <nav className="nav">
          <Link to="/products" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About Us</Link>
         
          <Link to="/signin" className="nav-link">Sign In</Link> {/* New Sign-In Link */}
        </nav>
      </div>
    </header>
    </div>
  );
}

export default Header;
