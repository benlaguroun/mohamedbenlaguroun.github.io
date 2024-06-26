// src/components/Services.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  { id: 1, title: 'Web Development', description: 'Building responsive and modern web applications.' },
  { id: 2, title: 'Mobile Development', description: 'Creating user-friendly and performant mobile apps.' },
  { id: 3, title: 'UI/UX Design', description: 'Designing engaging and intuitive user interfaces.' },
];

const Services = () => {
  return (
    <Container className="services-section">
      <h2 className="text-center my-5">Services</h2>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <Card className="service-card glass-card">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Link to={`/services/${service.id}`}>
                  <Button variant="primary">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
