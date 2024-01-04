import React, {useState} from "react";
import "./navbar.css";
import {Link} from 'react-scroll'

import menu from '../../assets/menu.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">

      {/* Logo */}
      <span className="logo">MuskanMandil</span>

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Projects</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Experience</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Contact</Link>
      </div>

      {/* Mobile Menu Icon */}
      <img src={menu} alt="Menu" className="mobMenuIcon" onClick={()=>setShowMenu(!showMenu)}/>

      {/* Mobile Menu */}
      <div className="mobMenu" style={{display: showMenu ? 'flex' : 'none'}} >
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="mobMenuLink" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="mobMenuLink" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="mobMenuLink" onClick={()=>setShowMenu(false)}>Experience</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="mobMenuLink" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="mobMenuLink" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  );
};

export default Navbar;
