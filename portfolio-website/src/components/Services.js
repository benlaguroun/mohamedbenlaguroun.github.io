import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Building responsive and dynamic websites.', price: '$1000' },
    { title: 'Mobile Development', description: 'Creating mobile applications for Android and iOS.', price: '$1500' },
    { title: 'UI/UX Design', description: 'Designing user interfaces and user experiences.', price: '$800' },
  ];

  return (
    <Container id="services" className="py-5">
      <h2>Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="my-3">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text className="text-primary">{service.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
