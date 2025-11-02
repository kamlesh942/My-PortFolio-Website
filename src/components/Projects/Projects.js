import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/GroceryImg.png";
import editor from "../../Assets/Projects/codeEditor.png";
import GroceryImg from "../../Assets/Projects/GroceryImg.png";
import suicide from "../../Assets/Projects/suicide.png";
import simongame from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GroceryImg}
              isBlog={false}
              title="Grocery Site"
              description="Developed a full-stack Grocery Website using React.js, Node.js, Express.js, MongoDB, and JavaScript.
Features include product browsing, cart management, secure user authentication, and real-time order updates, providing a seamless online shopping experience.."
              ghLink="https://github.com/kamlesh942/vercel-frontend"
              demoLink="https://vercel-frontend-lime.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simongame}
              isBlog={false}
              title="Simon Game"
              description="The Simon Game is a fun and interactive memory-based game that tests a player’s ability to remember and repeat color sequences.
              In this game, four colored buttons—red, blue, green, and yellow—light up in a random pattern. The player must watch carefully and then click the buttons in the exact same order.
              With each correct round, the sequence gets longer and faster, making the game more challenging.
              It’s built using HTML, CSS, and JavaScript, where JavaScript handles the game logic, user input, and sequence generation."

              ghLink="https://github.com/kamlesh942/SimonGame"
              demoLink="https://kamlesh942.github.io/SimonGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="The Typing Tool is a simple and interactive web application designed to help users improve their typing speed and accuracy.
              It displays random words or sentences that the user must type within a given time, providing instant feedback on errors and typing speed.
              Built using HTML, CSS, and JavaScript, the tool dynamically measures words per minute (WPM) and accuracy percentage.
              It offers a clean and responsive interface, making it ideal for both beginners and professionals who want to practice and track their typing performance in real time."
              ghLink="https://github.com/kamlesh942/Typing-Tool"
              demoLink="https://kamlesh942.github.io/Typing-Tool/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
