import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/hero/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="app-logo" height={49} width={125}></img>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="hero" smooth={true} duration={600} offset={-50}>
            <u>Home</u> <span className="chevron">›</span>
          </Link>
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
          <Link to="contact" smooth={true} duration={600} offset={-50}>
            Contact<span className="chevron">›</span>
          </Link>
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
