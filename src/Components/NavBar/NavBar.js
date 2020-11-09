import React, { useState } from "react";
import { NavButton } from "./NavButton/NavButton";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Captain's Log
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="fas fa-times" />
          ) : (
            <FaBars className="fas fa-bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Tank 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Tank 2
            </Link>
          </li>
          {/*<li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Log Out
            </Link>
          </li>*/}
        </ul>
        <NavButton />
      </nav>
    </>
  );
}

export default NavBar;
