import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LogInForm.css';

function LogInForm() {
  return (
    <div className="log-in-form-container">
      <h1>Log In</h1>
      <p>
        If you don't have an account and just want to take a tour of the app
        sign in with the demo credentials below!
      </p>
      <h2>Username: DemoUser</h2>
      <h2>Password: Demopass123</h2>
      <p>Username and password are case sensitive.</p>
      <form className="log-in-form">
        <label htmlFor="user_name">User Name:</label>
        <input type="test" name="user_name" id="user_name"></input>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password"></input>
        <button type="submit">Log In</button>
      </form>
      <div className="log-in-link-cont">
      <Link>Sign Up</Link>
      <Link>Forgot Username</Link>
      <Link>Forgot Password</Link>
      </div>
    </div>
  );
}

export default LogInForm;
