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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map(project => (
            <Col md={4} className="project-card">
              <ProjectCard
                imagePath={project.imagePath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
              />
            </Col>
          ))}
        </Row>
      </Container >
    </Container >
  );
};

export default Projects;