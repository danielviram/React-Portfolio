import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class AboutMe extends Component {
  render() {
    return (
      <Container fluid className="home-about-me-container" id="aboutme">
        <Row>
          <Col className="home-about-me-header-container">
            <h1 className="home-section-title secondary">About Me</h1>
            <div className="section-block background-primary"></div>
          </Col>
        </Row>
        <Row className="home-about-me-content-container">
          <Col md={true} className="home-about-me-content-one">
            <img
              className="home-about-me-img"
              src={require("../assets/about-me-img.jpg")}
            />
          </Col>
          <Col md={true} className="home-about-me-content-two">
            <p className="home-about-me-text secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime doloribus quam nisi asperiores doloremque. Officiis exercitationem architecto aliquam nobis sit, repellendus officia fuga. Impedit esse excepturi a provident enim?
                        </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;