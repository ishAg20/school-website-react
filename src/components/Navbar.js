import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="logo-container">
        <img src="/logo.png" alt="School Logo" />
        <Link className="nav-link-main nav-link" to="/" role="link">
          The Heritage School
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/" role="link">
          Home
        </Link>
        <Link className="nav-link" to="/about-us" role="link">
          About Us
        </Link>
        <Link className="nav-link" to="/academics" role="link">
          Academics
        </Link>
        <Link className="nav-link" to="/admissions" role="link">
          Admissions
        </Link>
        <Link className="nav-link" to="/faculty" role="link">
          Faculty
        </Link>
        <Link className="nav-link" to="/students" role="link">
          Students
        </Link>
        <Link className="nav-link" to="/gallery" role="link">
          Gallery
        </Link>
        <Link className="nav-link" to="/contact-us" role="link">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
