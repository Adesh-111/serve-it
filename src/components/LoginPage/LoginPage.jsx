import React, { useState } from "react";
import "./LoginPage.css";
import assets from "../../assets/assets";

const LoginPage = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [emailStatus, setEmailStatus] = useState(""); 
  const [passwordStatus, setPasswordStatus] = useState(""); 
  const [error, setError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });

    if (name === "email") {
      const isEmailValid = validateEmail(value);
      setEmailStatus(isEmailValid ? "valid" : "invalid");
    }

    if (name === "password") {
      const { isValid, errors } = validatePassword(value);
      setPasswordStatus(isValid ? "valid" : "invalid");
      setPasswordErrors(errors);
    }

    if (name === "confirmPassword" && value !== signupData.password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const errors = [];
    if (!/(?=.*[a-z])/.test(password)) errors.push("At least one lowercase letter");
    if (!/(?=.*[A-Z])/.test(password)) errors.push("At least one uppercase letter");
    if (!/(?=.*\d)/.test(password)) errors.push("At least one number");
    if (!/(?=.*[@#$%^&*])/.test(password)) errors.push("At least one special character (@#$%^&*)");
    if (password.length < 8) errors.push("Minimum 8 characters");

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (passwordStatus !== "valid") {
      alert("Please ensure your password meets all requirements.");
      return;
    }
    alert("Signup Successful");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div className="auth-container">
      <div className="main-auth-box">
        <div className="auth-box signup-form">
          <h2>Hey there!</h2>
          <form onSubmit={handleSignupSubmit}>
            <label style={{ color: "#30C70F" }}>Email:</label>
            <input
              type="email"
              name="email"
              className={`email ${emailStatus}`}
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />

            <label style={{ color: "#1B82B3" }}>Password:</label>
            <input
              className={`pass ${passwordStatus}`}
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
            {passwordErrors.length > 0 && (
              <ul className="pass-rules">
                {passwordErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}

            <label style={{ color: "grey" }}>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="confirmPass"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
              style={{
                borderColor: error ? "rgb(236, 103, 103)" : "grey",
                boxShadow: error ? "0px 0px 5px rgb 236, 103, 103" : "none",
              }}
            />
            {error && <p className="error-text">{error}</p>}

            <label className="terms">
              <input type="checkbox" required className="check" />I hereby agree
              to all the Terms and Conditions mentioned <a href="#">here</a>
            </label>

            <button type="submit" className="sign-up-button">
              Sign Up
            </button>
          </form>
        </div>

        <div className="vertical-line">|</div>

        <div className="auth-box login-form">
          <h2>Welcome back!</h2>
          <form onSubmit={handleLoginSubmit}>
            <label style={{ color: "#30C70F" }}>Email:</label>
            <input
              type="email"
              name="email"
              className="email"
              value={loginData.email}
              onChange={handleLoginChange}
              style={{ color: "grey" }}
              required
            />

            <label style={{ color: "#1B82B3" }}>Password:</label>
            <input
              type="password"
              name="password"
              className="password"
              value={loginData.password}
              style={{ color: "grey" }}
              onChange={handleLoginChange}
              required
            />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>

            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <p style={{ color: "grey" }}>or you can use</p>
          <div className="social-buttons">
            <a href="#">
              <img src={assets.google} alt="Google Login" />
            </a>
            <a href="#">
              <img src={assets.facebook} alt="Facebook Login" />
            </a>
            <a href="#">
              <img src={assets.x} alt="X Login" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
