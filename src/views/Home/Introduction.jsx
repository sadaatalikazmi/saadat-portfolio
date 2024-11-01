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
              With <b className='teal'>nearly a decade</b> in software development, I bring seasoned expertise in <b className='teal'>full-stack engineering</b>, blending innovation with proven technical skills.
              <br />
              Skilled in crafting seamless, <b className='teal'>interactive UIs</b> with <b className='teal'>React.js, Redux, React Query, CSS, MUI, and React Bootstrap</b> to deliver highly responsive and user-focused web applications.
              <br />
              Proficient in <b className='teal'>Node.js and Express.js</b> to build scalable, efficient backend services and <b className='teal'>RESTful APIs</b>, ensuring robust performance and maintainability.
              <br />
              Extensive experience with <b className='teal'>MongoDB and SQL</b>, structuring reliable, optimized data storage solutions for various application needs.
              <br />
              Deploying and managing applications on <b className='teal'>AWS, DigitalOcean, Jenkins, and GitHub</b>, with a focus on scalability, security, and seamless <b className='teal'>CI/CD workflows</b>.
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