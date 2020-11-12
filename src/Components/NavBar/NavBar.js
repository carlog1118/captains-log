import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GiShipWheel } from "react-icons/gi";
import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";

function NavBar() {
  const [hamClick, setHamClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleHamClick = () => setHamClick(!hamClick);
  const closeMobileMenu = () => setHamClick(false);
  const handleCaretClick = () => setDropdown(!dropdown);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <GiShipWheel className="logo-icon" />
          <Link className="logo-link">Captain's Log</Link>
        </div>

        <ul className={hamClick ? "nav-list active" : "nav-list"}>
          <li className={dropdown ? "nav-item drop-active": "nav-item"} id="tank-item">
            <Link className="nav-link tank-link" onClick={handleCaretClick}>
              Tanks
              {dropdown ? (
                <FaCaretUp className="caret" />
              ) : (
                <FaCaretDown className="caret" />
              )}
            </Link>
            {dropdown ? <Dropdown dropdown={dropdown}/> : null}
          </li>

          <li className="nav-item">
            <Link className="nav-link" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleHamClick}>
          {hamClick ? (
            <FaTimes className="fas fa-times" />
          ) : (
            <FaBars className="fas fa-bars" />
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
