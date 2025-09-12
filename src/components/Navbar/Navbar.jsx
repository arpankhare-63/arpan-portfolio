import { useEffect, useRef, useState } from "react";
import menu_icon from "../../assets/icon/menu-icon.png";
import Button from "../Button/Button"; // Scroll-aware, unstyled
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef();

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setMobileMenu((prev) => !prev);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${sticky ? "dark-nav" : ""}`}>
      {/* Logo */}
      <h1 className="Sn">AK</h1>

      {/* Navigation Links */}
      <ul
        className={`nav-menu ${
          mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <li>
          <Button className="nav-menu-btn" scroll="Home" onClick={() => setMobileMenu(false)}>Home</Button>
        </li>
        <li>
          <Button className="nav-menu-btn" scroll="About_me" onClick={() => setMobileMenu(false)}>About</Button>
        </li>
        <li>
          <Button className="nav-menu-btn" scroll="Skills" onClick={() => setMobileMenu(false)}>Skills</Button>
        </li>
        <li>
          <Button className="nav-menu-btn" scroll="Certification" onClick={() => setMobileMenu(false)}>Certification</Button>
        </li>
        <li>
          <Button className="nav-menu-btn" scroll="Projects" onClick={() => setMobileMenu(false)}>Projects</Button>
        </li>
        <li>
          <Button className="nav-menu-btn" scroll="Experience" onClick={() => setMobileMenu(false)}>Education & Experience</Button>
        </li>
        <li>
          <Button className="navstyle" scroll="Contact" onClick={() => setMobileMenu(false)}>Contact</Button>
        </li>
      </ul>

      {/* Hire Me Button */}
      <div className="exception">
        <a
          className="btn-blue cn"
          href="mailto:kharearpan7777@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Arpan,"
          onClick={() => setMobileMenu(false)}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <img
        src={menu_icon}
        alt="menu toggle"
        className="menu_icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
