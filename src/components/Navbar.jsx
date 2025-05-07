// src/components/Navbar.jsx
import React,{ useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import '../styles/Navbar.css'; // Import the corresponding styles
import logo from '../img/logo192.png';
function NavigationBar()
{
  
  return (
      <Container fluid className='p-0'>
      <Navbar bg="light" expand='md' className="custom-navbar">
        <Navbar.Brand href="/contact" className="brand-name"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='collapsed'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="hstack gap-5 menu-item-container">
            <Nav.Link href="/about" className='menu-item'>About</Nav.Link>
            <Nav.Link href="/products" className='menu-item'>Products</Nav.Link>
            <Nav.Link href="/contact" className='menu-item'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}

export default NavigationBar


