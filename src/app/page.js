// pages/index.js
import React from 'react';
import Logo from './logo/page'; // Pastikan jalur ini benar
import './css/Login.css'; // Pastikan jalur ini benar

export default function Home() {
  return (
    <main className="main-container">
      <Logo />
      <div className='login-form-container'>
        <form method='POST'>
          <div className="form-group">
            <div className='label-input'><label htmlFor="email">Email</label></div>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <div className='label-input'><label htmlFor="password">Password</label></div>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Log in</button>
        </form>
        <div className="sign-up-link">
          Don't have an account yet? <a href="#">sign up here</a>
        </div>
      </div>
    </main>
  );
}
