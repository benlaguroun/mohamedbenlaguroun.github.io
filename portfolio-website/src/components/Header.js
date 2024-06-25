import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header bg-dark text-white text-center">
      <Container className="py-5">
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my work and skills</p>
      </Container>
    </div>
  );
};

export default Header;
