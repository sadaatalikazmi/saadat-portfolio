import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

const AboutCard = () => {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <b className='teal'>Syed Saadat Ali Kazmi </b>
            from <b className='teal'> Richmond, TX, USA.</b>
            <br />
            I have worked for over 9 years as a <b className='teal'>Software Developer</b> at various companies across the <b className='teal'>USA</b>, serving industries such as <b className='teal'>banking, healthcare, energy, retail, and telecommunications</b>. My experience spans diverse sectors, enabling me to build versatile and impactful solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight className='teal' /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight className='teal' /> Traveling
            </li>
            <li className='about-activity'>
              <ImPointRight className='teal' /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;