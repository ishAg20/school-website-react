import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about fadeIn">
      <div className="about-content">
        <div className="text-section">
          <h2>About Us</h2>
          <p>
            Founded in 2001, The Heritage School aims to provide quality
            education that balances academic achievement with overall
            development. We believe that education extends beyond the confines
            of traditional academics. Our philosophy is rooted in the pursuit of
            knowledge, personal growth, and community involvement. We strive to
            create an environment where students are not only challenged
            intellectually but also supported in their emotional and social
            development.
          </p>
          <h2>Message from the Principal - Mary George </h2>
          <p>
            "At The Heritage School, we are committed to fostering an atmosphere
            of curiosity, respect, and integrity. Our vision is to inspire our
            students to become well-rounded individuals who are not only
            academically proficient but also emotionally resilient and socially
            responsible. We believe in a holistic approach to education that
            integrates intellectual growth with the development of character and
            leadership skills."
          </p>
          <h2>Vision & Mission</h2>
          <p>
            "To inspire and empower every student to reach their full potential
            through a holistic education that fosters creativity, critical
            thinking, and a lifelong love of learning. We envision a school
            where academic excellence, moral integrity, and global citizenship
            converge to shape the leaders of tomorrow. Our mission is to provide
            a nurturing and inclusive environment where students are encouraged
            to explore their passions and develop their unique talents. We are
            committed to delivering a rigorous and diverse curriculum that
            integrates academic, artistic, and athletic pursuits while promoting
            character development, ethical values, and social responsibility. We
            strive to prepare our students to excel in a dynamic world and
            contribute positively to society."
          </p>
          <h2>Infrastructure and Facilities</h2>
          <p>
            Our modern campus features state-of-the-art classrooms,
            well-equipped science and computer labs, and a diverse library.
            Students benefit from dedicated arts and music rooms, a
            comprehensive sports complex, and a versatile auditorium for events.
            Our cafeteria provides nutritious meals, while our playground and
            green spaces offer recreational and relaxing environments. The
            health and wellness center ensures students’ medical needs are met
            promptly. We are dedicated to maintaining top-notch facilities to
            support academic excellence and holistic development.
          </p>
        </div>
        <div className="image-section">
          <img className="principal" src="principal.jpg" alt="Principal" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
