import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col>
          <h2>About Me</h2>
          <p>
            I am a passionate software developer with experience in building web and mobile applications. I specialize in full-stack development and have a deep understanding of various technologies.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
