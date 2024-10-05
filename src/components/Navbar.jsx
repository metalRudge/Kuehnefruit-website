// src/components/Navbar.jsx
import React,{useState,useEffect} from 'react';
import '../styles/Navbar.css'; // Import the corresponding styles
import { Navbar, Nav, Container } from 'react-bootstrap';
export function NavigationBar()
{
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // Effect to handle resize
  useEffect(() => {
    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
const maxWidth = viewportWidth > 1200 ? `${viewportWidth}` : '100%'; // Adjust as needed 
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar" style={{width: '100%', maxWidth: viewportWidth}}>
      <Container>
        <Navbar.Brand href="#home" className="brand-name">KUEHNEFRUIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-nav">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};