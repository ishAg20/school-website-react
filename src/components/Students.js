import React from "react";
import "./Students.css";

const Students = () => {
  return (
    <div className="students fadeIn">
      <h1>Students</h1>
      <div className="content-wrapper">
        <div className="text-section">
          <h2>Extracurricular Activities</h2>
          <p>
            At The Heritage School, we believe that learning extends beyond the
            confines of the traditional classroom. Our comprehensive
            extracurricular program is designed to foster well-rounded
            development and provide students with a platform to explore their
            diverse interests. From competitive sports teams and artistic
            endeavors to cutting-edge science clubs and technological
            innovations, our school offers an extensive array of activities that
            cater to every student’s passions. These activities not only enhance
            students' skills but also promote teamwork, leadership, and personal
            growth, ensuring that each student has the opportunity to thrive in
            areas beyond academics.
          </p>
          <h2>Achievements</h2>
          <p>
            Our students consistently set high standards and achieve remarkable
            success across a spectrum of disciplines. Whether it’s clinching top
            positions in national academic competitions, excelling in
            state-level sports events, or showcasing exceptional talents in
            cultural festivals, our students’ achievements are a testament to
            their hard work and dedication. We take immense pride in celebrating
            these milestones, providing our students with the recognition they
            deserve, and encouraging them to pursue excellence. Our commitment
            to fostering a culture of achievement ensures that every student's
            unique talents and efforts are acknowledged and celebrated.
          </p>
          <h2>Student Council</h2>
          <p>
            The Student Council at The Heritage School plays a pivotal role in
            shaping the student experience and fostering a strong sense of
            community. Through their active participation, council members
            develop invaluable leadership skills and gain practical experience
            in organizing and managing school-wide initiatives. The council is
            instrumental in planning and executing a variety of events, from
            school dances and charity drives to awareness campaigns and peer
            mentoring programs. By taking on these responsibilities, student
            council members not only contribute to the school’s vibrant culture
            but also prepare themselves for future leadership roles and
            professional challenges.
          </p>
        </div>
        <div className="image-section">
          <img
            src="https://theheritageschool.org/images/new-gallery/post15(1)-min.jpg"
            alt="Extracurricular Activity 1"
          />
          <img
            src="https://theheritageschool.org/images/new-gallery/post%2017-min.jpg"
            alt="Achievement 1"
          />
          <img
            src="https://theheritageschool.org/images/new-gallery/post%2010-min.jpg"
            alt="Student Council Event 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Students;
