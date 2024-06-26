// src/pages/ServiceDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './ServiceDetail.css';

const services = {
  1: {
    title: 'Web Development',
    description: 'In-depth information about web development services.',
    prices: [
      { package: 'Basic', price: '$500' },
      { package: 'Standard', price: '$1000' },
      { package: 'Premium', price: '$1500' },
    ],
  },

  2: {
    title: 'Web Development',
    description: 'In-depth information about web development services.',
    prices: [
      { package: 'Basic', price: '$500' },
      { package: 'Standard', price: '$1000' },
      { package: 'Premium', price: '$1500' },
    ],
  },

  3: {
    title: 'Web Development',
    description: 'In-depth information about web development services.',
    prices: [
      { package: 'Basic', price: '$500' },
      { package: 'Standard', price: '$1000' },
      { package: 'Premium', price: '$1500' },
    ],
  },
  // Add other services if needed
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <Container className="service-detail-container">
      <Card className="service-detail-card">
        <Card.Header className="service-detail-header">
          <h1>{service.title}</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>{service.description}</Card.Text>
          <Row>
            {service.prices.map((price, index) => (
              <Col md={4} key={index}>
                <Card className="price-card">
                  <Card.Body>
                    <Card.Title>{price.package}</Card.Title>
                    <Card.Text>{price.price}</Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceDetail;
