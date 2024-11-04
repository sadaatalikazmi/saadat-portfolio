import React from 'react';
import Card from 'react-bootstrap/Card';
import { CgWebsite } from 'react-icons/cg';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={image} alt='card-img'  />
      <Card.Body className='project-card-body'>
        <div>
          <Card.Title className='project-title'>{title}</Card.Title>
          <Card.Text className='project-description'>{description}</Card.Text>
        </div>
        {link && link !== '' && (
          <Button
            variant='primary'
            href={link}
            target='_blank'
          >
            <CgWebsite /> &nbsp;
            {'Demo'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;