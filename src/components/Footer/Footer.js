import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/hero/logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          {/* <h2>ARSU</h2>
          <p>Influencer Technology</p> */}
          <img
            src={logo}
            className="logo"
            alt="app-logo"
            height={49}
            width={125}
          ></img>

          <div className="icon-container">
            Follow
            <div className="social-icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <p>Product Design</p>
          <p>Business Consulting</p>
          <p>Customer Service</p>
          <p>Brand Identity</p>
          <p>SEO Optimization</p>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>785 Main Street, 2nd Block</p>
          <p>Melbourne, Australia</p>
          <p>support@gmail.com</p>
          <p>+000 (123) 456 88</p>
        </div>

        <div className="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>Get Every Single Update to Join Our Newsletter</p>

          <div className="newsletter-box">
            <input type="text" placeholder="Email Address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      <div className="policy">
        <p className="copyright">Copy © 2023 Arsu. All Rights Reserved</p>
        <p className="copyright">
          <span className="Privacy">Setting & Privacy</span>{" "}
          <span className="Privacy">Faqs</span>{" "}
          <span className="Privacy">Contact</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
