import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-content">
      <h2>Signup</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
