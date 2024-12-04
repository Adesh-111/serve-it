import React from "react";
import assets from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <img src={assets.colorLogo} alt="" className="nav-logo" />
          <ul className="nav-links">
            <a href="">
              <li className="nav-link">HOME</li>
            </a>
            <a href="">
              <li className="nav-link">BROWSE</li>
            </a>
            <a href="">
              <li className="nav-link">DONATIONS</li>
            </a>
            <a href="">
              <li className="nav-link">REQUESTS</li>
            </a>
            <a href="">
              <li className="nav-link">ACCOUNT</li>
            </a>
          </ul>
          <div className="user-details">
            <img src={assets.demoUser} alt="demo-user" className="user-img" />
            <h3 className="user-name">Poornima Sundar</h3>
            <p className="user-place">Poornima's Wedding</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
