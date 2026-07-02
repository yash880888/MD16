import React from "react";
import Button from "react-bootstrap/Button";
import { TiTick } from "react-icons/ti";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  let data = [
    {
      imgs: (
        <>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
        </>
      ),

      btns: (
        <>
          <Button variant="primary" className="abt-btn">
            About Us
          </Button>
        </>
      ),
      title: (
        <>
          Why Choose{" "}
          <span style={{ color: "#0d6efd" }}> MD16 Computer Academy</span>?
        </>
      ),
      pra: (
        <>
          Bopal's premier institute for practical IT education with
          industry-aligned curriculum.
        </>
      ),
      prag: (
        <>
          At MD16 Computer Academy, we bridge the gap between academic knowledge
          and industry requirements. Our project-based learning approach ensures
          you gain hands-on experience with real-world applications.
        </>
      ),
      traning1: (
        <>
          <TiTick className="my-icon" /> Practical Training
          <p>80% practical sessions with live projects</p>
        </>
      ),
      traning2: (
        <>
          <TiTick className="my-icon" /> Practical Training
          <p>Morning, afternoon & evening batches</p>
        </>
      ),
      traning3: (
        <>
          <TiTick className="my-icon" /> Practical Training
          <p>Modern computer lab with latest software</p>
        </>
      ),
      traning4: (
        <>
          <TiTick className="my-icon" /> Practical Training
          <p>Quality education at reasonable prices</p>
        </>
      ),

      btn: (
        <>
          <Button className="view-btn">View Our Courses</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid className="px-5">
        <Row className="container2 justify-content-center">
          {data.map((v, i) => (
            <React.Fragment key={i}>
              <Col md={10}>
                <Row>
                  <Col md={6} className="left">
                    {v.imgs}
                  </Col>

                  <Col md={6} className="right">
                    <div>{v.btns}</div>
                    <h1>{v.title}</h1>
                    <p>{v.pra}</p>
                    <p>{v.prag}</p>
                    <div className="group1">
                      <h6>{v.traning1}</h6>
                      <h6>{v.traning2}</h6>
                    </div>
                    <div className="group2">
                      <h6>{v.traning3}</h6>
                      <h6>{v.traning4}</h6>
                    </div>

                    <div>{v.btn}</div>
                  </Col>
                </Row>
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default About;
