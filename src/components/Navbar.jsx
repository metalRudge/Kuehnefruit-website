// src/components/Navbar.jsx
import React,{ useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import '../styles/Navbar.css'; // Import the corresponding styles

function NavigationBar()
{
  
  return (
      <Container className='min-vw-100'>
      <Navbar bg="light" expand='md' className=" custom-navbar">
      <Box display={'flex'} flexGrow={1}>
        <Navbar.Brand href="#home" className="brand-name">KUEHNEFRUIT</Navbar.Brand>
        </Box>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='collapsed'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="hstack gap-3 menu-item-container">
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


