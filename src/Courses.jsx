import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Courses.css";

function Courses() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <div className="menu">
            <span
              className="active mb-5"
              style={{ color: "white", background: "blue", opacity: "100" }}
            >
              All Courses
            </span>
            <span>Development</span>
            <span>Design</span>
            <span>Marketing</span>
            <span>Professional</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Courses;
