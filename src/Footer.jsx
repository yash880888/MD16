import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  let data = [
    {
      name: (
        <>
          <span style={{ color: "#ffffff" }}>MD16</span>
          <span style={{ color: "#ffc107" }}> Computer Academy</span>
        </>
      ),
      info: "Bopal's premier institute for practical IT education with industry-aligned courses and expert trainers.",
      icon: (
        <>
          <div className="text-primary  d-flex flex-row gap-3">
            <FaFacebook size={18} />
            <FaInstagram size={18} className="text-danger " />
            <FaLinkedin size={18} />
            <FaYoutube size={18} className="text-danger" />
          </div>
        </>
      ),
      title: "Quick Links",
      list: (
        <>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>Contact</li>
        </>
      ),
      titles: "Popular Courses",
      lists: (
        <>
          <li>Full Stack Web Development</li>
          <li>Professional Graphic Design</li>
          <li>Python Programming</li>
          <li>Digital Marketing</li>
          <li>Data Science with Python</li>
        </>
      ),
      contact: "Contact Info",
      detail: (
        <>
          <li className="d-flex align-items-start mb-2">
            <IoLocationSharp size={30} /> Vishwanath Samam, EL-14, opp. Club O7
            Road, Shela, Ahmedabad, Gujarat 380058
          </li>
          <li className="d-flex align-items-start mb-2">
            <PiPhoneCallFill size={20} /> +91 8980671996
          </li>
          <li className="d-flex align-items-center mb-3">
            <MdEmail size={20} /> info@md16academy.com
          </li>
          <Button variant="success" style={{width:"40%"}}>
            <FaWhatsapp size={18} />
            Chat Now
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <Container fluid>
        <Row style={{ background: "#212529" }} className="fs-5">
          {data.map((v, i) => (
            <React.Fragment key={i}>
              <Col md={1}></Col>
              <Col md={3}>
                <h5 className="mt-5 fw-bold"> {v.name}</h5>
                <div className="text-light mt-4 mb-4">{v.info}</div>
                <div> {v.icon}</div>
              </Col>
              <Col md={2}>
                <h5 className="mt-5 fw-bold text-light"> {v.title}</h5>
                <ul className="list-unstyled mt-3 text-light ">{v.list}</ul>
              </Col>

              <Col md={2}>
                <h5 className="mt-5 fw-bold text-light"> {v.titles}</h5>
                <ul className="list-unstyled mt-3 text-light ">{v.lists}</ul>
              </Col>

              <Col md={3}>
                <h5 className="mt-5 fw-bold text-light"> {v.contact}</h5>
                <ul className="list-unstyled mt-3 text-light">{v.detail}</ul>
              </Col>
              <Col md={1}></Col>
            </React.Fragment>
          ))}
        </Row>
        <Row
          style={{ background: "#212529" }}
          className="border-top py-5 text-center"
        >
          <div className="text-light">
            © 2025 MD16 Computer Academy. All rights reserved.
            <h4>Designed by Yash Patel</h4>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
