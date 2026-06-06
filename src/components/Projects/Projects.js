import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Replace with your project screenshot
import placeholderImg from "../../Assets/about.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="section-subtext">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Duplicate this Col block for each project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
              isBlog={false}
              title="[Project Title]"
              description="[Short description of what the project does, tech stack, and your role.]"
              ghLink="https://github.com/darshdee"
              // demoLink="https://your-demo-url.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
