import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>Deals in IT infrastructure setup, Data Center Design, Cloud Implementation, etc.</p>
          <div className="footer-socials">
            <a href="/about"><i className="fab fa-facebook"></i></a>
            <a href="/about"><i className="fab fa-twitter"></i></a>
            <a href="/about"><i className="fab fa-instagram"></i></a>
            <a href="/about"><i className="fab fa-linkedin"></i></a>
            <a href="/about"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>+91 1234958609</p>
          <p>297 Sector 30, Faridabad, Haryana 121003</p>
          <p>support@vincentio.in</p>
        </div>
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Public Cloud</li>
            <li>Private Cloud</li>
          </ul>
        </div>
        <div className="footer-quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Contact</li>
            <li>About Us</li>
            <li>Team</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2020-2022 Vincentio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
