import React from "react";
import "./Admissions.css";

const Admissions = () => {
  return (
    <div className="admissions fadeIn">
      <h1>Admissions</h1>
      <p>
        Online registrations for the academic session 2025-26 for Pre-Nursery,
        Nursery, and Class I are now closed.
      </p>
      <p>
        For further admission inquiries, please{" "}
        <a href="mailto:admissions@theheritageschool.org">email us</a> or call
        us at
        <a href="tel:+91900746664"> +91-900746664</a> (for International
        Boards).
      </p>
      <h1>Age Criteria for Admission (Session 2025-26)</h1>
      <ul>
        <li>
          <strong>Pre-Nursery:</strong> 1st April 2021 to 31st March 2022
        </li>
        <li>
          <strong>Nursery:</strong> 1st April 2020 to 31st March 2021
        </li>
        <li>
          <strong>Class I:</strong> 1st April 2018 to 31st March 2019
        </li>
      </ul>
      <h1>Admission Process</h1>
      <p>
        Registration does not guarantee admission and is subject to seat
        availability and fulfillment of admission criteria. Parents must submit
        the application form and register online. The registration fee is
        non-refundable:
      </p>
      <ul>
        <li>
          <strong>Rs. 2000:</strong> IBDP, IGCSE & Cambridge Lower Secondary
          (CLS)
        </li>
        <li>
          <strong>Rs. 1500:</strong> All other classes including SEN
        </li>
      </ul>
      <p>
        Fees and other charges are non-refundable once paid at the time of
        admission. Applications are also invited per RTE guidelines.
      </p>
      <h1>Additional Information</h1>
      <p>
        The Heritage School offers IBDP (International Baccalaureate Diploma
        Programme), IGCSE (International General Certificate of Secondary
        Education), and Cambridge Lower Secondary Curriculum (CLS). For the
        academic session 2023-24, please refer to the contact details above.
      </p>
      <a href="admission-form.pdf" className="admission-link" download>
        Download Admission Form
      </a>
    </div>
  );
};

export default Admissions;
