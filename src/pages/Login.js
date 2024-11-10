import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-content">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/signup">Signup here</Link></p>
    </div>
  );
}

export default Login;
