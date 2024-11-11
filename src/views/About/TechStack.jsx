import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TechCard from '../../components/TechCard';
import { SiSpring, SiSpringboot, SiApachekafka, SiPostgresql } from 'react-icons/si';
import { DiJava, DiJavascript1, DiReact, DiBootstrap, DiNodejs, DiDatabase, DiMysql, DiMongodb, DiGit, DiCode, DiCss3 } from 'react-icons/di';

const Techstack = () => {
  return (
    <Row className='stack'>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Java' techIcon={<DiJava />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Spring' techIcon={<SiSpring />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Spring Boot' techIcon={<SiSpringboot />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Apache Kafka' techIcon={<SiApachekafka />} />
      </Col>
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
        <TechCard techName='MySQL' techIcon={<DiMysql />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='MongoDB' techIcon={<DiMongodb />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='PostgreSQL' techIcon={<SiPostgresql />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Git' techIcon={<DiGit />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Code' techIcon={<DiCode />} />
      </Col>
    </Row>
  );
};

export default Techstack;