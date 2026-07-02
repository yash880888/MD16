import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Photo() {
  let data = [
    {
      img1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      img2: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      img3: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      img4: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

      img5: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

      img6: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {data.map((v, i) => (
            <React.Fragment key={i}>
              <Col md={4}>
                <img
                  src={v.img1}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded-3"
                />
              </Col>
              <Col md={4}>
                <img
                  src={v.img2}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded-3"
                />
              </Col>
              <Col md={4}>
                <img
                  src={v.img3}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded-3"
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
        <Row className="mt-3">
          {data.map((v, i) => (
            <React.Fragment key={i}>
              <Col md={4}>
                <img
                  src={v.img4}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded-3"
                />
              </Col>
              <Col md={4}>
                <img
                  src={v.img5}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded-3"
                />
              </Col>
              <Col md={4}>
                <img
                  src={v.img6}
                  alt=""
                  style={{ width: "100%" }}
                  className="rounded-3"
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Photo;
