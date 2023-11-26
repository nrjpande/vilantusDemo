import React from "react";
import "../css/home.css";
import fbLogo from "../images/fb.png";
import instaLogo from "../images/insta.jpg";
import linkedinLogo from "../images/LIn.png";
import xLogo from "../images/X.png";
import ytLogo from "../images/YT.png";
import mailLogo from "../images/mail.png";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <div className="socialLinks">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <img src={fbLogo} alt="fb_logo" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <img src={instaLogo} alt="insta_logo" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <img src={linkedinLogo} alt="LIn_logo" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <img src={xLogo} alt="X_logo" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <img src={ytLogo} alt="YT_logo" />
        </a>
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          <img src={mailLogo} alt="mail_logo" />
        </a>
      </div>
      <div className="navbar">
        <div className="logoName">
          <Link to="/">
            <img src={Logo} id="logo" alt="company_logo" />
          </Link>
          <Link to="/" className="logoNameId">
            <h1>Health Care Pvt. Ltd.</h1>
          </Link>
        </div>
        <div className="links">
          <Link to="/home" className="linkStyle">
            Home
          </Link>
          <Link to="/about" className="linkStyle">
            About Us
          </Link>
          <Link to="/quality" className="linkStyle">
            Quality Assurance
          </Link>
          <Link to="/products" className="linkStyle">
            Products
          </Link>
          <Link to="/contact" className="linkStyle">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
