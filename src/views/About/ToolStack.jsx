import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TechCard from '../../components/TechCard';
import { DiAndroid, DiApple } from 'react-icons/di';
import { SiVisualstudiocode, SiPostman, SiSlack, SiMacos } from 'react-icons/si';

const ToolStack = () => {
  return (
    <Row className='stack'>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='MacOS' techIcon={<SiMacos />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Android' techIcon={<DiAndroid />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Apple' techIcon={<DiApple />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Visual Studio Code' techIcon={<SiVisualstudiocode />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Postman' techIcon={<SiPostman />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Slack' techIcon={<SiSlack />} />
      </Col>
    </Row>
  );
};

export default ToolStack;