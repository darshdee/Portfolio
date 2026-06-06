import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I think in systems! Show me anything and my brain immediately starts mapping
            the inputs, feedback loops, and where it breaks. I'm very granular in my thinking and 
            it's served me well
            across <span className="purple">7+ years</span> in data science and
            engineering.
            <br />
            <br />
            I've done time on both sides of the startup vs corporate divide. I
            was a <span className="purple">Data Scientist at Intuitive</span>,
            then a <span className="purple">Senior Data Engineer at Miles</span>
            , where I had a front-row seat watching it go from{" "}
            <span className="purple">seed to ~Series B</span>, which is a
            polite way of saying I learned a lot, very fast, sometimes at 2am..
            <br />
            <br />
            Lately I built <span className="purple">Capital Analytics</span>, a
            platform that combined my three favorite things: technology,
            coding, and finance with the goal of running my own capital as a
            part-time quantitative investor. I'm a futurist by default:
            always curious (like seriously where are all the aliens??), always building something, fairly convinced the
            next decade is going to be awesome
            <br />
            <br />
            In the "real" world, you'll usually find me:
          </p>

          <ul>
            <li className="about-activity">
              🥾 Out hiking, love good views and a good workout
            </li>
            <li className="about-activity">
              🍽️ Hunting down new restaurants (I'm an actual Google Local
              Guide, make of that what you will)
            </li>
            <li className="about-activity">
              🎬 Deep in a movie, good or gloriously bad
            </li>
            <li className="about-activity">
            👩‍❤️‍👨 Spending time with my loved ones of course
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>Thanks for stopping by!</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
