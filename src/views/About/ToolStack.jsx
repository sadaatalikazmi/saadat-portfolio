import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TechCard from '../../components/TechCard';
import { DiAndroid, DiApple, DiIntellij, DiMsqlServer, DiGithubBadge, DiJenkins, DiAws, DiDigitalOcean } from 'react-icons/di';
import { SiVisualstudiocode, SiPostman, SiSlack, SiMacos, SiAzuredevops, SiJira, SiConfluence, SiBitbucket } from 'react-icons/si';

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
        <TechCard techName='IntelliJ Idea' techIcon={<DiIntellij />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='MySQL Server' techIcon={<DiMsqlServer />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Postman' techIcon={<SiPostman />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='GitHub' techIcon={<DiGithubBadge />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Jenkins' techIcon={<DiJenkins />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='AWS' techIcon={<DiAws />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Azure DevOps' techIcon={<SiAzuredevops />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='DigitalOcean' techIcon={<DiDigitalOcean />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Jira' techIcon={<SiJira />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Confluence' techIcon={<SiConfluence />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2} >
        <TechCard techName='Bitbucket' techIcon={<SiBitbucket />} />
      </Col>
      <Col xs={6} sm={4} md={3} lg={2}>
        <TechCard techName='Slack' techIcon={<SiSlack />} />
      </Col>
    </Row>
  );
};

export default ToolStack;