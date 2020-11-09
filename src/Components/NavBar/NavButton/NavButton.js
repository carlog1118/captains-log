import React from 'react';
import './NavButton.css';
import { Link } from 'react-router-dom';

export function NavButton() {
  return (
    <Link to='/'>
      <button className='btn'>Log Out</button>
    </Link>
  );
}