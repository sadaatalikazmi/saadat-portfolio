import React from "react";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import projectsList from "./projectsList";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map(project => (
            <Col md={4} className="project-card">
              <ProjectCard
                imagePath={project.imagePath}
                title={project.title}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container >
    </Container >
  );
};

export default Projects;