import React from "react";
import Github from "./Github";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="know-section">
          <Col md={7} className="know-content">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="teal">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="teal">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="teal">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
};

export default About;