import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";


class CustomFooter extends Component {
    render() {
      return (
        <Container fluid className="custom-footer-container background-secondary">
          <Row>
            <Col className="custom-footer-social-media-list-container">
              <ul className="custom-footer-social-media-list">
                <li className="custom-footer-social-media-item">
                  <a href="https://www.github.com/danielviram" target="_blank">
                  <LogoGithub fontSize="25px" color="#ef5f7a" />
                </a>
              </li>
              <li className="custom-footer-social-media-item">
                  <a href="https://www.linkedin.com/in/danielviram/"target="_blank">
                  <LogoLinkedin fontSize="25px" color="#ef5f7a" />
                  </a>
              </li>
              <li className="custom-footer-social-media-item">
                  <a href="https:///www.instagram.com/dannys.vibez"target="_blank">
                  <LogoInstagram fontSize="25px" color="#ef5f7a" /> 
                  </a>
                  </li>
                  </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomFooter;