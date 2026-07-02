import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Popular() {
  let data = [
    {
      btn: (
        <>
          <Button variant="primary" className="abt-btn">
            Testimonials
          </Button>
        </>
      ),
      title: (
        <>
          <h1>
            What Our <span style={{ color: "#0d6efd" }}>Students </span>Say
          </h1>
        </>
      ),
      info: (
        <>
          <h5>
            Hear from our successful students about their learning
            experience{" "}
          </h5>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid>
        <Row className="container4 align-items-center text-center py-5 fw-bolder fs-6">
          {data.map((v, i) => (
            <React.Fragment key={i} className="align-content-center">
              <Col>
                {v.btn}
                {v.title}
                {v.info}
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Popular;
