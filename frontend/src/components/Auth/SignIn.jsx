import '../../../public/CSS/auth.css';

const SignIn = ({onSwitch, onForgot}) => {

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Enter your details to continue learning.</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <button type='button' onClick={onForgot} className="toggle-btn forgot-link">Forgot Password?</button>
            </div>

          <button type="submit" className="auth-submit-btn">
            Sign In
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
          Don't have an account?
          <button 
            className="toggle-btn"
            onClick={onSwitch}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;