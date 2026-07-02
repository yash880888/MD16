import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import ContactForm from "./Form";
function Contact() {
  let data = [
    {
      btn: (
        <Button variant="primary" className="abt-btn">
          Contact Us
        </Button>
      ),

      title: (
        <>
          Get In <span className="text-primary">Touch</span>
        </>
      ),
      info: "Have questions about our courses? We're happy to help!",

      location: "Our Location",
      locatio:
        "Vishwanath Samam, EL-14, opp. Club O7 Road, Shela, Ahmedabad, Gujarat 380058",
      call: "Call US",
      number: "+91 8980671996",
      email: "Email Us",
      emai: "info@md16academy.com",
      work: "Working Hours",
      time: "Monday to Saturday: 10:00 AM - 8:00 PM",
      follow: "Follow Us",
    },
  ];
  return (
    <>
      <Container fluid>
        <Row className="mt-5 mb-5">
          {data.map((v, i) => (
            <React.Fragment key={i}>
              <Col md={1}></Col>
              <Col md={5}>
                {v.btn}
                <h1>{v.title}</h1>
                <h5>{v.info}</h5>

                <h4>
                  <div className="d-flex align-items-start ">
                    <IoLocationSharp
                      size={40}
                      className="bg-primary p-2 rounded-5 text-light   me-3 "
                    />
                    {v.location}
                  </div>
                </h4>
                <p className="mx-5">{v.locatio}</p>

                <h4>
                  <div className="d-flex align-items-start">
                    <PiPhoneCallFill
                      size={40}
                      className="bg-primary  p-2 rounded-5 text-light me-3 "
                    />
                    {v.call}
                  </div>
                </h4>
                <p className="mx-5">{v.number}</p>

                <h4>
                  <div className="d-flex align-items-start">
                    <MdEmail
                      size={40}
                      className="bg-primary  p-2 rounded-5 text-light me-3  "
                    />
                    {v.email}
                  </div>
                </h4>
                <p className="mx-5">{v.emai}</p>

                <h4>
                  <div className="d-flex align-items-start">
                    <IoIosTimer
                      size={40}
                      className="bg-primary  p-2 rounded-5 text-light me-3 "
                    />
                    {v.work}
                  </div>
                </h4>
                <p className="mx-5 ">{v.time}</p>

                <h5 className="mt-5">
                  {v.follow}
                  <div className="text-primary  d-flex flex-row gap-3">
                    <FaFacebook size={25} />
                    <FaInstagram size={25} className="text-danger " />
                    <FaLinkedin size={25} />
                    <FaYoutube size={25} className="text-danger" />
                  </div>
                </h5>
              </Col>
              <Col md={5}>
                <ContactForm />
              </Col>
              <Col md={1}></Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Contact;
