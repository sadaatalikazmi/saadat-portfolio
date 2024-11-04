import React from 'react';
import ProjectCard from './ProjectCard';
import projectsList from './projectsList';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container fluid className='project-section'>
      <Container>
        <div className='projects-heading-container'>
          <h1>My Recent <strong className='teal'>Works</strong></h1>
          <p>Here are a few projects I've worked on recently.</p>
        </div>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {projectsList.map(project => (
            <Col
              md={4}
              className='project-card'
              key={`project_${project.title}`}
            >
              <ProjectCard
                image={project.image}
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