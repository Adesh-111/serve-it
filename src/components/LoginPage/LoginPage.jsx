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

  const [error, setError] = useState("");

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });

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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match");
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
          <label style={{color: "#30C70F"}}>Email:</label>
          <input
            type="email"
            name="email"
            className="email"
            value={signupData.email}
            onChange={handleSignupChange}
            required
          />

          <label style={{color: "#1B82B3"}}>Password:</label>
          <input
          className="pass"
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
            
            required
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="confirmPass"
            value={signupData.confirmPassword}
            onChange={handleSignupChange}
            required
            style={{ borderColor: error ? "red" : "grey" ,
                boxShadow : error ? " 5px 5px 15px 1px red" :  "none",
            }}
          />
          {error && <p className="error-text">{error}</p>}

          <label className="terms">
            <input type="checkbox" required className="check"/>I hereby agree to all the Terms
            and Conditions mentioned <a href="#">here</a>
          </label>

          <button type="submit" className="sign-up-button">Sign In</button>
        </form>
      </div>

      <div className="vertical-line">|</div>

      <div className="auth-box login-form">
        <h2>Welcome back!</h2>
        <form onSubmit={handleLoginSubmit}>
          <label style={{color: "#30C70F"}}>Email:</label>
          <input
            type="email"
            name="email"
            className="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />

          <label style={{color: "#1B82B3"}}>Password:</label>
          <input
            type="password"
            name="password"
            className="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" className="login-button">Log In</button>
        </form>
        <p style={{color: "grey"}}>or you can use</p>
        <div className="social-buttons">
          <a href="#">{assets.}</a>
<a href="#">{assets}</a>
      <a href="#">{assets}</a>    
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
