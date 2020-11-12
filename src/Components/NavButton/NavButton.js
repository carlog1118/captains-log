import React from 'react'
import "./NavButton.css";
import { Link } from "react-router-dom";

export function NavButton() {
  return (
    <Link>
      <button className="nav-btn">Sign Up</button>
    </Link>
  );
}
