import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="School Logo" />
        <Link className="nav-link-main nav-link" to="/">
          The Heritage School
        </Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about-us">
          About Us
        </Link>
        <Link className="nav-link" to="/academics">
          Academics
        </Link>
        <Link className="nav-link" to="/admissions">
          Admissions
        </Link>
        <Link className="nav-link" to="/faculty">
          Faculty
        </Link>
        <Link className="nav-link" to="/students">
          Students
        </Link>
        <Link className="nav-link" to="/gallery">
          Gallery
        </Link>
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
