import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Darshil Desai</span>, a
            data scientist and data engineer based in the{" "}
            <span className="purple">Tampa Bay area, Florida</span>, with{" "}
            <span className="purple">7+ years of experience</span> in tech.
            <br />
            <br />
            I'm currently working as a{" "}
            <span className="purple">[Your Current Role]</span> at{" "}
            <span className="purple">[Your Company]</span>.
            <br />I hold a{" "}
            <span className="purple">[Your Degree / Program]</span> from{" "}
            <span className="purple">[Your University]</span>.
            <br />
            <br />
            Outside of work, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> [Hobby / interest placeholder] 🎯
            </li>
            <li className="about-activity">
              <ImPointRight /> [Hobby / interest placeholder] ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> [Hobby / interest placeholder] 🌍
            </li>
          </ul>

          <p className="quote-text">"[Your personal quote here]" </p>
          <footer className="blockquote-footer">Darshil Desai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
