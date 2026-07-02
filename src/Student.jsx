import React from "react";
import "./Student.css";
import { Container, Row, Col } from "react-bootstrap";

function Student() {
  let data = [
    {
      student: (
        <>
          <h1>1200+</h1>
          <h6>Student Trained</h6>
        </>
      ),
      course: (
        <>
          <h1>25+</h1>
          <h6>Courses Offered</h6>
        </>
      ),
      certified: (
        <>
          <h1>15+</h1>
          <h6>Certified Trainer</h6>
        </>
      ),
      satisfaction: (
        <>
          <h1>98%</h1>
          <h6>satisfaction Rate</h6>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid>
        <Row className="container3 text-center g-4  ">
          {data.map((v, i) => (
            <React.Fragment key={i}>
              
              <Col md={3}>
                <div className="stat-box">{v.student}</div>
              </Col>
              <Col md={3}>
                <div className="stat-box">{v.course}</div>
              </Col>

              <Col md={3}>
                <div className="stat-box">{v.certified}</div>
              </Col>

              <Col md={3}>
                <div className="stat-box">{v.satisfaction}</div>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Student;
