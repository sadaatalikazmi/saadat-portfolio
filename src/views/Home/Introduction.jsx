import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import avatarImage from '../../assets/images/avatar.png';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

const Introduction = () => {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='teal'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              Over <b className='teal'>12 years</b> of experience in designing and developing robust web applications using <b className='teal'>Java Spring (Core, MVC, Boot, Data JPA) and Apache Kafka</b> for backend services, and <b className='teal'>React JS</b> for building dynamic, responsive front-end interfaces, ensuring high-performance and seamless user experiences.
              <br />
              Expertise in building <b className='teal'>interactive, user-centric React JS applications</b>, incorporating <b className='teal'>Redux</b> for state management, and using <b className='teal'>React Router</b> for client-side routing, while applying modern front-end frameworks like <b className='teal'>Material UI (MUI) and React Bootstrap</b> for visually appealing and accessible UIs.
              <br />
              Proficient in working with <b className='teal'>SQL databases (Oracle, SQL Server) and NoSQL (MongoDB)</b>, utilizing <b className='teal'>Hibernate/JPA</b> for efficient ORM and data persistence, optimizing SQL queries, and developing complex stored procedures and triggers.
              <br />
              Experienced in managing code versions and collaborating with teams using <b className='teal'>Git/GitHub</b> and implementing <b className='teal'>Jenkins pipelines</b> for automated deployments, enabling smooth integration, testing, and version control practices.
              <br />
              Skilled in developing and deploying microservices using <b className='teal'>Spring Boot</b> and integrating them with <b className='teal'>AWS cloud environments</b>, leveraging <b className='teal'>Jenkins</b> for <b className='teal'>CI/CD pipelines</b> to automate and streamline the build, test, and deployment processes.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={avatarImage} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='teal'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='mailto:saadat.ali.pro@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillMail size='35px' className='social-icon' />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/saadatali1/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <FaLinkedinIn size='35px' className='social-icon' />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://github.com/sadaatalikazmi'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillGithub size='35px' className='social-icon' />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Introduction;