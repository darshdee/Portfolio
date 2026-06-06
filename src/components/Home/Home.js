import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Aboutcard from "../About/AboutCard";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Social profile URLs — update LinkedIn / Twitter / Instagram when ready
const SOCIAL_LINKS = {
  github: "https://github.com/darshdee",
  linkedin: "https://www.linkedin.com/in/darshild",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
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

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Intro blurb */}
      <Home2 />

      {/* About card, skills, tools, GitHub graph */}
      <Container fluid className="about-section">
        <Container>
          <Row
            id="about"
            style={{ justifyContent: "center", padding: "10px" }}
          >
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
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
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
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
              <li className="social-icons">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
