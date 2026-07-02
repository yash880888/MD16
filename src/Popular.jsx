import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";


function Popular() {
  let data = [
    {
      btn: (
        <>
          <Button variant="primary" className="abt-btn">
            Our Courses
          </Button>
        </>
      ),
      title: (
        <>
          <h1>
            Popular <span style={{ color: "#0d6efd" }}>Courses</span>
          </h1>
        </>
      ),
      info: (
        <>
          <h5>
            Get 60% discount on all courses this month. Limited seats available!
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
              <Col>{v.btn}{v.title}{v.info}</Col>
              
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Popular;
