import styles from "./App.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import React from "react";
function Content() {
  let data = [
    {
      title: (
        <>
          Transform Your Career With
          <span className={styles.highlight}>IT Skills</span>
        </>
      ),
      info: (
        <>
          Join Bopal's most trusted computer academy with
          <span className={styles.offer}> 60% OFF</span> on <br />
          all courses this month
        </>
      ),

      btns: (
        <>
          <Button variant="light">Explore Courses</Button>
          <Button variant="outline-light">
            <FaWhatsapp /> Chat Now
          </Button>
        </>
      ),

      imgs: (
        <>
          <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="" />
          <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" />
        </>
      ),

      rate: (
        <>
          <p>
            Trusted by 1200+ Students <br /> <FaStar /> <FaStar /> <FaStar />{" "}
            <FaStar /> <FaStar />
            4.9/5 (380 reviews)
          </p>
        </>
      ),

      right: (
        <>
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
            alt=""
            className="img-fluid"
          />
        </>
      ),
    },
  ];
  return (
    <Container fluid className={styles.container1}>
      <Row className="align-items-center">
        {data.map((v, i) => (
          // {/* LEFT */}
          <React.Fragment key={i}>
            <Col md={1}></Col>
            <Col md={5}>
              <div className={styles.left}>
                <h1>{v.title}</h1>
                <div className="mb-5 mt-3">{v.info}</div>
                <div className={styles.btns}>{v.btns}</div>
                <div className={styles.rating}>
                  <div className={styles.imgs}>{v.imgs}</div>
                  <div>{v.rate}</div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              <div className={styles.right}>{v.right}</div>
            </Col>
          </React.Fragment>
        ))}
        {/* RIGHT */}
      </Row>
    </Container>
  );
}

export default Content;

// ---------------------------------------------------------------------------------------//

// import styles from "./App.module.css";
// import Button from "react-bootstrap/Button";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

// function Content() {
//   return (
//     <div className={styles.container1}>
//       <div className={styles.left}>
//         <h1>
//           Transform Your Career With{" "}
//           <span style={{ color: "#ffc107" }}>IT Skills</span>
//         </h1>
//         <h6>
//           Join Bopal's most trusted computer academy with{" "}
//           <span
//             style={{
//               background: "#ffc107",
//               borderRadius: "5px",
//               padding: "3px",
//             }}
//           >
//             60% OFF
//           </span>
//           on all courses this month
//         </h6>
//         <div className={styles.btns}>
//           <Button variant="light">Explore Courses</Button>
//           <Button variant="outline-light">
//             <FaWhatsapp />
//             Chat Now
//           </Button>
//         </div>
//         <div style={styles.rating}>
//           <div style={styles.imgs}>
//             <img
//               src="https://randomuser.me/api/portraits/women/32.jpg"
//               alt=""
//             />
//             <img
//               src="https://randomuser.me/api/portraits/men/42.jpg"
//               alt=""
//             />
//             <img
//               src="https://randomuser.me/api/portraits/women/63.jpg"
//               alt=""
//             />
//           </div>

//           <div style={styles.reviews}>
//             <p>Trusted by 1200+ Students</p>
//             <p>
//               <FaStar className="star" />
//               <FaStar className="star" />
//               <FaStar className="star" />
//               <FaStar className="star" />
//               <FaStar className="star" />
//               4.9/5(380 review)
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.right}>
//         <img
//           src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

// export default Content;

// --------------------------------------------------------------------------------

// <div className={styles.left}>
//   <h1>
//     Transform Your Career With
//     <span className={styles.highlight}>IT Skills</span>
//   </h1>

//   <p>
//     Join Bopal's most trusted computer academy with
//     <span className={styles.offer}> 60% OFF</span> on <br />
//     all courses this month
//   </p>

//   <div className={styles.btns}>
//     <Button variant="light">Explore Courses</Button>
//     <Button variant="outline-light">
//       <FaWhatsapp /> Chat Now
//     </Button>
//   </div>

//   {/* RATING */}
//   <div className={styles.rating}>
//     <div className={styles.imgs}>
//       <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
//       <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="" />
//       <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" />
//     </div>

//     <div>
//       <p>
//         Trusted by 1200+ Students <br /> <FaStar /> <FaStar /> <FaStar />{" "}
//         <FaStar /> <FaStar />
//         4.9/5 (380 reviews)
//       </p>
//     </div>
//   </div>
// </div>;

// <div className={styles.right}>
//   <img
//     src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
//     alt=""
//     className="img-fluid"
//   />
// </div>;
