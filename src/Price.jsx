import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "./Price.css";
function Price() {
  let data = [
    {
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Full Stack Web Development",
      info: "Master front-end and back-end technologies to build complete web applications from ",
      oldPrice: "₹25,000",
      newPrice: "₹10,000",
      btns: (
        <>
          <Button variant="primary" className="abt-btn">
            Development
          </Button>
        </>
      ),
    },
    {
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Professional Graphic Design",
      info: "Master Adobe Creative Suite to create stunning visuals for print and digital media.",
      oldPrice: "₹18,000",
      newPrice: "₹7,200",
      btns: (
        <>
          <Button variant="success" className="abt-btn">
            Design
          </Button>
        </>
      ),
    },
    {
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      title: "Digital  Marketing  Mastery option",
      info: "Comprehensive training in SEO, SEM, Social Media, Email Marketing, Analytics and",
      oldPrice: "₹20,000",
      newPrice: "₹8,000",
      btns: (
        <>
          <Button variant="warning" className="abt-btn">
            Marketing
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {data.map((v, i) => (
            <Col md={4} key={i}>
              <Card>
                <Card.Img variant="top" src={v.img} />
                <div className="tag-btn">{v.btns}</div>
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">{v.title}</Card.Title>
                  <Card.Text className=" fs-5">{v.info}</Card.Text>

                  <div className="add fs-5">
                    <p>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {v.oldPrice}
                      </span>
                      <span style={{ color: "Black", fontWeight: "bold" }}>
                        {v.newPrice}
                      </span>
                    </p>
                    <Button variant="primary" className="enrol-btn">
                      Enroll Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="wrapper">
        <Button variant="outline-primary" className="view">
          View All 25+ Courses
        </Button>
      </div>
    </>
  );
}

export default Price;
