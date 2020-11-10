import React from 'react';
import './LogOutBtn.css';
import { Link } from 'react-router-dom';

export function LogOutBtn() {
  return (
    <Link to='/'>
      <button className='log-out-btn'>Log Out</button>
    </Link>
  );
}