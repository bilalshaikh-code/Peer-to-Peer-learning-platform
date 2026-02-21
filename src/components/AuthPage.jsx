import React, { useState } from 'react';
import '../../public/CSS/auth.css';


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Join the Community'}</h2>
          <p>{isLogin ? 'Enter your details to continue learning.' : 'Start your journey with us today.'}</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          {isLogin && (
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="social-auth">
          <button className="social-btn">Google</button>
          <button className="social-btn">GitHub</button>
        </div>

        <p className="auth-toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            className="toggle-btn" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;