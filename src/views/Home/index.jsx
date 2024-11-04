import React from 'react';
import Typewritter from './Typewritter';
import Introduction from './Introduction';
import { Container, Row, Col } from 'react-bootstrap';
import hiThereImage from '../../assets/images/hi_there.png';

const Home = () => {
  return (
    <section>
      <Container fluid id='home' className='home-section'>
        <Container className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <h1 className='heading'>
                Hi There! <span className='wave' role='img' aria-labelledby='wave'>👋🏻</span>
              </h1>
              <h1 className='heading-name'>
                I'M <strong className='main-name'>SYED SAADAT ALI KAZMI</strong>
              </h1>
              <Typewritter />
            </Col>
            <Col md={5}>
              <img className='img-fluid' src={hiThereImage} alt='home_image' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Introduction />
    </section>
  );
};

export default Home;