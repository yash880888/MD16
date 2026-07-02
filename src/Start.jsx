import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Start() {
  let data = [
    {
      title: "Ready to Start Your IT Career?",
      info: "Limited seats available for the upcoming batches. Enroll now to avail 60% discount!",
      btns: <Button variant="light">Chat Now</Button>,
      btn: <Button variant="outline-light">Call Us</Button>,
    },
  ];

  return (
    <>
      <Container fluid>
        <Row className="bg-primary text-white mt-5 p-4">
          {data.map((v, i) => (
            <React.Fragment key={i} > 
            <Col md={1}></Col>
              <Col md={7}>
               <h1> {v.title}</h1>
               <h5> {v.info}</h5>
              </Col>
              <Col md={3} className="but">
                {v.btns}
                {v.btn}
              </Col>
              <Col md={1}></Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Start;
