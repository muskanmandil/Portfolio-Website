import React from "react";
// import { useState}
import "./navbar.css";
import {Link} from 'react-scroll'

// import contactImg from "../../assets/contact.png";
// import menu from '../../assets/menu.png'

const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <span className="logo">MuskanMandil</span>
      <div className="desktopMenu">
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Skills</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuLink">Contact</Link>
      </div>
      {/* <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
        <img src={contactImg} alt="" className="desktopMenuIcon" />{" "}
        Contact Me
      </button> */}

      {/* <img src={menu} alt="Menu" className="mobMenu" /> */}
      {/* onClick={()=>setShowMenu(!showMenu)}  */}
      {/* <div className="navMenu" > */}
      {/* style={{display: showMenu? 'flex' : 'none'}} */}
        {/* <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" >Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" >About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" >Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" >Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" >Contact</Link>
      </div> */}

      {/* onClick={()=>setShowMenu(false)} */}


    </nav>
  );
};

export default Navbar;
