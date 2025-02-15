import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiSearch, FiMenu } from "react-icons/fi";
import "../styles/header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${showHeader ? "visible" : "hidden"}`}>
      {/* Logo */}
      <div className="logo">
        <span className="text-2xl">⚫</span>
        <span>Tool Finder</span>
      </div>

      {/* Mobile Menu Icon */}
      <FiMenu className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="landing" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="products" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="testimonials" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Testimonials</Link>
        <Link to="about" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="contact" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>

      {/* Search and Sign Up */}
      <div className="header-actions">
        <FiSearch className="search-icon" />
        <button className="signup-btn">Sign Up — For Free</button>
      </div>
    </header>
  );
};

export default Header;
