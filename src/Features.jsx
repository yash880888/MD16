import React from "react";
import styles from "./App.module.css";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
import { Container } from "react-bootstrap";

function Features() {
  let data = [
    {
      icon: <FaCertificate size={30} />,
      title: "Certified Courses",
      desc: "Industry-recognized certifications that add value to your resume and career prospects.",
    },
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: "Expert Trainers",
      desc: "Learn from professionals with 10+ years of industry and teaching experience.",
    },
    {
      icon: <FaBriefcase size={30} />,
      title: "Placement Support",
      desc: "Dedicated placement cell that helps you get placed in top IT companies.",
    },
  ];
  return (
    <>
      <Container className="mt-5">
        <div className={styles.container2}>
          <div className="row text-center">
            {data.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className={`feature-box p-4 ${styles.featurebox}`}>
                  <div className={styles["icon-circle"]}>{item.icon}</div>
                  <div className="fw-bold">{item.title}</div>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Features;
