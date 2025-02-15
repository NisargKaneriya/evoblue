import React from "react";
import { FaTwitter, FaLinkedin, FaPeace, FaDribbble } from "react-icons/fa";
import "../styles/footer.css";// Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side - Logo & Social Icons */}
        <div className="footer-logo">
          <h2>Untitled UI</h2>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaPeace /></a>
            <a href="#"><FaDribbble /></a>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Solutions</a> <span className="new-badge">New</span></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Releases</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Media Kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p className="footer-text">
          Move faster with Untitled UI  
          <br />
          Save countless hours of design and ship great-looking designs faster.
        </p>
        <p className="copyright">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
