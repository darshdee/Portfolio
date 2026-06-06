import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApacheairflow,
  SiApachespark,
  SiDatabricks,
  SiDjango,
  SiPandas,
  SiSnowflake,
} from "react-icons/si";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark fontSize="24px" />
        <div className="tech-icons-text">PySpark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks fontSize="24px" />
        <div className="tech-icons-text">Databricks</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnowflake fontSize="24px" />
        <div className="tech-icons-text">Snowflake</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow fontSize="24px" />
        <div className="tech-icons-text">Airflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango fontSize="24px" />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize="24px" />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
