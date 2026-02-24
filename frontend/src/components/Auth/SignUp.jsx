import '../../../public/CSS/auth.css';
import { useState } from 'react';
import { signupUser } from "../../services/authService";

const SignUp = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // First Name
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    // Last Name
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone Number (simple validation: 10–15 digits)
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Phone number must be 10–15 digits";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const data = await signupUser(formData);

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      alert("Signup successful!");
    } catch (error) {
      if (error.response?.data) {
        setErrors(error.response.data);
      } else {
        alert("Signup failed");
      }
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Join the Community</h2>
          <p>Start your journey with us today.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="John" name='first_name' onChange={handleChange} required />
              <p style={{ color: "red" }}>{errors.first_name}</p>
          </div>

          <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" name='last_name' onChange={handleChange} required />
              <p style={{ color: "red" }}>{errors.last_name}</p>
          </div>

          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="johndoe" name='username' onChange={handleChange} required />
            <p style={{ color: "red" }}>{errors.username}</p>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" name='email' onChange={handleChange} required />
            <p style={{ color: "red" }}>{errors.email}</p>
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="8692374150" name='phone_number' onChange={handleChange} required />
            <p style={{ color: "red" }}>{errors.phone_number}</p>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" name='password' onChange={handleChange} required />
            <p style={{ color: "red" }}>{errors.password}</p>
          </div>

          <button type="submit" className="auth-submit-btn">
            Create Account
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
          Already have an account?
          <button
            className="toggle-btn"
            onClick={onSwitch}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;