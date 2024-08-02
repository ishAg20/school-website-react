import React from "react";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us fadeIn">
      <h1>Contact Us</h1>
      <p>
        For any queries or information regarding admissions, events, or general
        inquiries, please feel free to reach out to us. We are here to assist
        you and provide the information you need.
      </p>
      <h1>Contact Information</h1>
      <p>Email: info@theheritageschoolrohini.org</p>
      <p>Phone: +91 (11) 1234-5678</p>
      <h1>Visit Us</h1>
      <p>Address: 1234 Heritage Road, Rohini, New Delhi, India</p>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.648059389099!2d77.0861084151131!3d28.692662082406865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c2381a3e30b%3A0x37a660645317d14a!2sThe%20Heritage%20School%2C%20Rohini!5e0!3m2!1sen!2sin!4v1632427929538!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
