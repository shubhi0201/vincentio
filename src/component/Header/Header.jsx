import React, { useState } from "react"; // Importing React and useState for managing state
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation
import "./header.css"; // Importing the CSS file for styling
import logo from './vincentiologo.png'; // Importing the logo image

// Header component to render the navigation bar
const Header = () => {
  // State to track if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Navigation bar */}
      <nav className={`nav1 ${isMenuOpen ? "open" : ""}`}>
        {/* Logo with a link to the home page */}
        <Link to="/">
          <img src={logo} height="40px" alt="Logo" />
        </Link>

        {/* Navigation links */}
        <Link className="Link1" to="/" />
        <Link className="Link2" to="/About" style={{ fontSize: 20, fontWeight: 400 }}>
          Why Vincentio
        </Link>
        <Link className="Link3" to="/About" style={{ fontSize: 20, fontWeight: 400 }}>
          GPU Pricing
        </Link>
        <Link className="Link4" to="/About" style={{ fontSize: 20, fontWeight: 400 }}>
          Product
        </Link>
        <Link className="Link6" to="/About" style={{ fontSize: 20, fontWeight: 400 }}>
          Solution
        </Link>
        <Link className="Link7" to="/About" style={{ fontSize: 20, fontWeight: 400 }}>
          Careers
        </Link>
        <Link className="Link8" to="/About" style={{ fontSize: 20, fontWeight: 400 }}>
          Contact
        </Link>

        {/* Login/Sign Up button */}
        <nav className="na">
          <Link to="/login">
            <button className="btn">Login / Sign Up</button>
          </Link>
        </nav>
      </nav>

      {/* Hamburger menu button for toggling menu visibility */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;
