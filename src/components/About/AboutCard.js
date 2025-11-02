import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Kamlesh Rajak</span>{" "}
            from <span className="purple">Satna, Madhya Prdesh, India</span>.
            <br />
            I’m currently  exploring  my in{" "}
            <span className="purple">Mern Stack Development</span> and {" "}
            <span className="purple">Self Learning</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring new Things  🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kamlesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
