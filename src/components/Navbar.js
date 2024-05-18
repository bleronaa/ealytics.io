import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/2023-11-ealytics-150x55.png";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar({backgroundColor}) {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navbarColor = backgroundColor === 'light' ? 'rgba(91, 91, 91, 0.1)' : 'rgba(255, 255, 255, 0.1)';

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar" >
        <Link to="/" className="navbar-logo">
          <img src={logo}  alt="logo" width="165" height="60.5" style={{marginBottom:"60px"}}/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={clicked ? "nav-items active" : "nav-items"}>
          {navItems.map((item) => (
            <Dropdown key={item.id} item={item} />
          ))}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
