import React from "react";
import "./navbar.css";
import {Link} from 'react-scroll'

import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Menu */}
      <div className="desktopMenu">
        <Link path="/home" className="desktopMenuListItem">Home</Link>
        <Link path="/about" className="desktopMenuListItem">About</Link>
        <Link path="/portfolio" className="desktopMenuListItem">Portfolio</Link>
        <Link path="/contact" className="desktopMenuListItem">Contact</Link>
      </div>

      {/* Contact Me Button */}
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuIcon" />{" "}
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
