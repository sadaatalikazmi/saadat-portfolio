import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiPostgresql } from 'react-icons/si';
import TechCard from '../../components/TechCard';
import { DiJavascript1, DiReact, DiBootstrap, DiNodejs, DiDatabase, DiMongodb, DiMysql, DiGit, DiGithubBadge, DiCode, DiCss3, DiDigitalOcean, DiAws } from 'react-icons/di';

const Techstack = () => {
  return (
    <Row className='stack'>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Javascript' techIcon={<DiJavascript1 />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='React JS' techIcon={<DiReact />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Bootstrap' techIcon={<DiBootstrap />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='CSS' techIcon={<DiCss3 />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Node JS' techIcon={<DiNodejs />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Database' techIcon={<DiDatabase />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='MongoDB' techIcon={<DiMongodb />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='MySQL' techIcon={<DiMysql />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='PostgreSQL' techIcon={<SiPostgresql />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Git' techIcon={<DiGit />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='GitHub' techIcon={<DiGithubBadge />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Code' techIcon={<DiCode />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='AWS' techIcon={<DiAws />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='DigitalOcean' techIcon={<DiDigitalOcean />} />
      </Col>
    </Row>
  );
};

export default Techstack;