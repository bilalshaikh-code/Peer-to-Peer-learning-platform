// ForgotPassword.jsx
import React from 'react';
import '../../../public/CSS/auth.css';

const  ForgotPassword = ({ onBack }) => {
  return (
    <div className='auth-container'>
        <div className="auth-card">
      <div className="auth-header">
        <h2>Reset Password</h2>
        <p>Enter your email and we'll send you a link to get back into your account.</p>
      </div>

      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@example.com" required />
        </div>

        <button type="submit" className="auth-submit-btn">
          Send Reset Link
        </button>
      </form>

      <button className="toggle-btn" onClick={onBack} style={{ marginTop: '1.5rem' }}>
        ← Back to Sign In
      </button>
    </div>
    </div>
  );
};

export default ForgotPassword;