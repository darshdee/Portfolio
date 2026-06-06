import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SOCIAL_LINKS = {
  github: "https://github.com/darshdee",
  linkedin: "https://www.linkedin.com/in/darshild",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> Built with ❤️ in FL</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-credit">
          <p>
            Website design inspired by Mr.{" "}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soumyajit Behera
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
