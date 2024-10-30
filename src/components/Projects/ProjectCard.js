import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import Button from "react-bootstrap/Button";

const ProjectCard = ({ imagePath, title, description, link }) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imagePath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {"\n"}
        {"\n"}
        {link && link !== "" && (
          <Button
            variant="primary"
            href={link}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;