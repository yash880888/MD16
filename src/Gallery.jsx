import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Popular() {
  let data = [
    {
      btn: (
        <>
          <Button variant="primary" className="abt-btn">
            Gallery
          </Button>
        </>
      ),
      title: (
        <>
          <h1>
            Our <span style={{ color: "#0d6efd" }}>Campus</span> &{" "}
            <span style={{ color: "#0d6efd" }}>Activities </span>
          </h1>
        </>
      ),
      info: (
        <>
          <h5>
Take a virtual tour of our academy and student activities          </h5>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid>
        <Row className="container4 align-items-center text-center py-5 fw-bolder fs-6">
          {data.map((v, i) => (
            <React.Fragment key={i} >
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
