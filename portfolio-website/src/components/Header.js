// src/components/Header.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css'; // Import custom CSS for Header

const Header = () => {
  return (
    <div className="header">
      <Container className="header-content text-center">
        <h1 className="header-title">Welcome to My Portfolio</h1>
        <p className="header-subtitle">Showcasing my work and skills</p>
        <Button variant="primary" size="lg" href="#contact">Contact Me</Button>
      </Container>
    </div>
  );
};

export default Header;
