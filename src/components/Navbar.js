import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="logo-container">
        <img src="/logo.png" alt="School Logo" />
        <Link className="nav-link-main nav-link" to="/" role="link" tabIndex="0">
          The Heritage School
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/" role="link" tabIndex="0">Home</Link>
        <Link className="nav-link" to="/about-us" role="link" tabIndex="0">About Us</Link>
        <Link className="nav-link" to="/academics" role="link" tabIndex="0">Academics</Link>
        <Link className="nav-link" to="/admissions" role="link" tabIndex="0">Admissions</Link>
        <Link className="nav-link" to="/faculty" role="link" tabIndex="0">Faculty</Link>
        <Link className="nav-link" to="/students" role="link" tabIndex="0">Students</Link>
        <Link className="nav-link" to="/gallery" role="link" tabIndex="0">Gallery</Link>
        <Link className="nav-link" to="/contact-us" role="link" tabIndex="0">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

