import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <b className="teal">Syed Saadat Ali Kazmi </b>
            from <b className="teal"> Richmond, TX, USA.</b>
            <br />
            I am currently employed as a software developer at <b className="teal">TRC Companies – Midland TX</b>.
            <br />
            I have completed Bachelor's in Computer Science at <b className="teal">NUST, Islamabad</b>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight className="teal" /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight className="teal" /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight className="teal" /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;