import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO INTRODUCE <span className="purple"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              I'm a data scientist and data engineer with 7+ years building
              data systems in tech.
              <br />
              <br />
              I work day to day in
              <i>
                <b className="purple"> Python, SQL, and PySpark</b>
              </i>
              , building and orchestrating pipelines on
              <i>
                <b className="purple">
                  {" "}
                  AWS, Databricks, Snowflake, and Airflow
                </b>
              </i>
              .
              <br />
              <br />
              My focus is the full path from raw data to production — designing
              scalable&nbsp;
              <i>
                <b className="purple">ETL/ELT pipelines</b>
              </i>
              , and shipping
              <i>
                <b className="purple">
                  {" "}
                  machine learning and recommendation systems
                </b>
              </i>
              &nbsp;that hold up under real load.
              <br />
              <br />
              I care about systems that are reliable, observable, and built to
              scale — not just code that runs once.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
