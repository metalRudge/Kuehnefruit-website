// src/components/Navbar.jsx
import React,{ useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css'; // Import the corresponding styles

function NavigationBar()
{
  
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">KUEHNEFRUIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-nav">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar