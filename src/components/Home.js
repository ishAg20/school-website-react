import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="fadeIn">
      <Carousel />
      <section className="home">
        <h1>The Heritage School</h1>
        <p>
          The Heritage School, founded in 2001 by the Kalyan Bharti Trust,
          revives India's ancient Gurukul tradition. Set amidst nature, it
          fosters holistic growth—physical, mental, social, and intellectual.
          Committed to transcending traditional boundaries, the school offers
          diverse curricula, including ICSE, ISC, IGCSE, and IBDP, to cultivate
          global citizens. Renowned as a leading international day-boarding
          school, it stands out in Kolkata and nationwide.
        </p>
        <div>
          <Link to="/about-us">About Us </Link>
          <Link to="/academics">Academics </Link>
          <Link to="/admissions">Admissions </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
