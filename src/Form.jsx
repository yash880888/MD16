import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as Yup from "yup";

function ContactForm() {
  // ✅ Validation Schema
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),

    course: Yup.string().required("Please select a course"),

    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="p-4 shadow-lg rounded-4 bg-white">
      <h3 className="mb-4">Send Us a Message</h3>

      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          firstName: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {/* NAME + EMAIL */}
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter your name"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Email Address</Form.Label>
                <InputGroup>
                  <InputGroup.Text>📧</InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            {/* PHONE */}
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={touched.phone && !!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* COURSE */}
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Label>Course Interested In</Form.Label>
                <Form.Select
                  name="course"
                  value={values.course}
                  onChange={handleChange}
                  isInvalid={touched.course && !!errors.course}
                >
                  <option value="">Select a course</option>
                  <option value="Full Stack Web Development">
                    Full Stack Web Development
                  </option>
                  <option value="Professional Graphic Design">
                    Professional Graphic Design
                  </option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="Digital Marketing Mastery">
                    Digital Marketing Mastery
                  </option>
                  <option value="Data Science with Python">
                    Data Science with Python
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.course}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* MESSAGE */}
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Enter your message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={touched.message && !!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* BUTTON */}
            <Button type="submit" className="w-100 mt-3">
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
