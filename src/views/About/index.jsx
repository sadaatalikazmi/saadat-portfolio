import React from 'react';
import Github from './Github';
import TechStack from './TechStack';
import Aboutcard from './AboutCard';
import ToolStack from './ToolStack';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../../assets/images/about.png';

const About = () => {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Row className='know-section'>
          <Col md={7} className='know-content'>
            <h1 className='know-content-heading'>
              Know Who <strong className='teal'>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className='about-img'>
            <img src={aboutImage} alt='about' className='img-fluid' />
          </Col>
        </Row>
        <h1 className='project-heading'>
          Professional <strong className='teal'>Skillset </strong>
        </h1>
        <TechStack />
        <h1 className='project-heading'>
          <strong className='teal'>Tools</strong> I use
        </h1>
        <ToolStack />
        <Github />
      </Container>
    </Container>
  );
};

export default About;