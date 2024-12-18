import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"
import logo from './vincentiologo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      
      <nav  className={`nav1 ${isMenuOpen ? "open" : ""}`}>
      <img src={logo} height="40px"alt="Logo" />
       <Link className="Link1" to ="/"> </Link>
       <Link className="Link2" to = "/About">Why Vincentio</Link>
       <Link className="Link3" to = "/About">GPU Pricing</Link>
       <Link className="Link4" to = "/About">Product</Link>
       <Link className="Link6" to = "/About">Solution</Link>
       <Link className="Link7"to = "/About">Careers</Link>
       <Link className="Link8" to = "/About">Contact</Link>
           <nav className="na"><Link to="/login"><button className="btn"> Login / Sign Up</button></Link></nav>
      </nav>
     
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      

    </header>
  );
};

export default Header;