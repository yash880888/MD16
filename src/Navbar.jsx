import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./App.module.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function Navbar() {
  let data = [
    {
      name: (
        <>
          <span style={{ color: "#ffffff" }}>MD16</span>
          <span style={{ color: "#ffc107" }}> Computer Academy</span>
        </>
      ),
      menu: (
        <>
          <li className={styles.menuitems}>Home</li>
          <li className={styles.menuitems}>about</li>
          <li className={styles.menuitems}>courses</li>
          <li className={styles.menuitems}>gallery</li>
          <li className={styles.menuitems}>Testimonials</li>
          <li className={styles.menuitems}>contact</li>
        </>
      ),
    },
  ];

  return (
    <>
      <Container fluid className={styles.navbar}>
        {data.map((v, i) => (
          <Row key={i}>
            <Col md={1}></Col>
            <Col md={5}>
              <div className={styles.website}>
                <h1>{v.name}</h1>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <div className={styles.menu}>
                <ul>{v.menu}</ul>
                <Button variant="success">
                  <FaWhatsapp />
                  Enquiry Now
                </Button>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Navbar;
