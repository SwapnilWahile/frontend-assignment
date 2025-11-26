import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/hero/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="app-logo" height={49} width={125}></img>
      </div>

      {/* <ul className="nav-links">
        <li>Home</li>
        <li>Client</li>
        <li>Services</li>
        <li>Project</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}

      <ul className="nav-links">
        <li>
          Home <span className="chevron">›</span>
        </li>
        <li>
          Client <span className="chevron">›</span>
        </li>
        <li>
          Services <span className="chevron">›</span>
        </li>
        <li>
          Project <span className="chevron">›</span>
        </li>
        <li>
          About <span className="chevron">›</span>
        </li>
        <li>
          Contact <span className="chevron">›</span>
        </li>
      </ul>

      <button className="nav-btn hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
