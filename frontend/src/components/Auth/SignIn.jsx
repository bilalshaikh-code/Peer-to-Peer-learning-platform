import '../../../public/CSS/auth.css';
import { useState } from "react";
import { loginUser } from "../../services/authService";

const SignIn = ({onSwitch, onForgot}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      // Store tokens based on remember me
      if (rememberMe) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
      } else {
        sessionStorage.setItem("access", data.access);
        sessionStorage.setItem("refresh", data.refresh);
      }

      alert("Login successful!");

      // You can redirect here
      window.location.href = "/dashboard";

    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Enter your details to continue learning.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="johndoe" name='username' onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" name='password' onChange={handleChange} required />
          </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> Remember me
              </label>
              <button type='button' onClick={onForgot} className="toggle-btn forgot-link">Forgot Password?</button>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

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