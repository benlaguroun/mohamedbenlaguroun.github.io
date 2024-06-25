import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  const projects = [
    { title: 'Project One', description: 'A web application for ...', imageUrl: 'link_to_image1' },
    { title: 'Project Two', description: 'A mobile app for ...', imageUrl: 'link_to_image2' },
    { title: 'Project Three', description: 'A design project ...', imageUrl: 'link_to_image3' },
  ];

  return (
    <Container id="portfolio" className="py-5">
      <h2>Portfolio</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
