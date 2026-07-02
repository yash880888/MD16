import React from "react";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Content from "./Content";
import Features from "./Features";
import About from "./About";
import Student from "./student";
import Popular from "./Popular";
import Courses from "./Courses";
import Price from "./Price";
import Gallery from "./Gallery";
import Testi from "./Testi";
import Review from "./Review";
import Start from "./Start";
import Contact from "./Contact";
import { Form } from "react-bootstrap";
import Location from "./Location";
import Footer from "./Footer";
import Photo from "./Photo";
function App() {
  return (
    <div>
      <div className={styles.main}>
        <Navbar />
        <Content />
        <Features />i
        <About />
        <Student />
        <Popular />
        <Courses />
        <Price />
        <Gallery />
        <Photo />
        <Testi />
        <Review />
        <Start />
        <Contact />
        <Form />
        <Location />
        <Footer />
      </div>
    </div>
  );
}

export default App;
