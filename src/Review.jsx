import React from "react";
import { IoMdStar } from "react-icons/io";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Review.css";
function Review() {
  let data = [
    {
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "priya patel",
      // icon: <IoMdStar />,<IoMdStar />,<IoMdStar />,<IoMdStar />,<IoMdStar />,
      write:
        "The Full Stack Web Development course at MD16 completely transformed my career. The practical approach helped me land a job as a front-end developer within 2 months of completing",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Rahul Sharma",
      // icon: <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />,

      write:
        "I took the Python Programming course and was amazed by the depth of knowledge our trainer had. The real-world projects gave me confidence to start freelancing immediately after completion.",
    },

    {
      img: "  https://randomuser.me/api/portraits/women/68.jpg",
      name: "Neha Gupta",
      // icon: <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />,

      write:
        "the Graphic Design course exceeded my expectations. The faculty helped me build a strong portfolio that got me multiple job offers. The 60% discount made it incredibly affordable too!",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {data.map((v, i) => (
            <Col md={4} key={i}>
              <div className="review-card p-3 shadow">
                <div className="person">
                  <img src={v.img} className="review-img" />
                  <div className="person-info">
                    <h6 className="mb-1">{v.name}</h6>
                    <div className="text-warning">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </div>
                  </div>
                </div>
                <div>{v.write}</div>
              </div>{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Review;
