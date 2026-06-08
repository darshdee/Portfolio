import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePhoto from "../../Assets/darshildesai_pp.jpg";
import setupBro from "../../Assets/TechIcons/Setup-bro.svg";
import Particle from "../Particle";
import Type from "./Type";
import Aboutcard from "../About/AboutCard";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Social profile URLs
const SOCIAL_LINKS = {
  github: "https://github.com/darshdee",
  linkedin: "https://www.linkedin.com/in/darshild",
};

function Home() {
  return (
    <section>
      {/* Hero */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey how's it going?{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DARSHIL DESAI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-hero-img">
              <img
                src={profilePhoto}
                alt="Darshil Desai"
                className="profile-photo profile-photo-hero"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Bio card, skills, tools */}
      <Container fluid className="about-section about-section-home">
        <Container>
          <Row id="about" className="about-intro-row">
            <Col md={7} className="about-intro-text">
              <h1 className="about-intro-heading">
                Just a little bit about <strong className="purple">me</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col md={5} className="about-img">
              <img src={setupBro} alt="about" className="img-fluid about-section-img" />
            </Col>
          </Row>

          <h1 className="project-heading" id="skillset">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />

          <h1 className="project-heading" id="tools">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>

      {/* Social links */}
      <Container id="contact">
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
